import filterAsync from 'node-filter-async'
import Queue = require('smart-request-balancer')
import axios from 'axios'

import * as types from './types'
import {
  UONReq,
  UONCountriesRes,
  UONCountryCreateRes,
  UONManager,
  UONManagerRes,
  UONUserCreateReq,
  UONUserRes,
  UONLeadByTouristRes,
  UONRequestByUserRes,
  Request,
  Lead,
  User,
} from './types'

export { UONReq }

const queue = new Queue({
  rules: {
    common: {
      rate: 5,
      limit: 1,
      priority: 1,
    },
  },
  default: {
    //@ts-ignore
    rate: 5,
    limit: 1,
  },
  overall: {
    rate: 5,
    limit: 1,
  },
  retryTime: 300,
  ignoreOverallOverheat: true,
})

class UON {
  private base: string = 'https://api.u-on.ru/'

  constructor(private token: string) {}

  private url(path: string): string {
    return this.base + this.token + '/' + path
  }

  public async request<T>(path: string, payload?: UONReq): Promise<T> {
    return new Promise(async (resolve, reject) => {
      if (!payload) {
        queue.request(
          (retry: any) =>
            axios
              .get(this.url(path))
              .then(res => {
                resolve(res.data)
              })
              .catch(err => {
                if (err.response?.status === 429) {
                  console.log('To many reqests. Waitig...')
                  return retry(err.response.data.parameters?.retry_after)
                }
              }),
          Math.floor(Math.random() * 1000),
          'common'
        )
      } else {
        queue.request(
          (retry: any) =>
            axios
              .post(this.url(path), payload)
              .then(res => {
                resolve(res.data)
              })
              .catch(err => {
                if (err.response?.status === 429) {
                  console.log('To many reqests. Waitig...')
                  return retry(err.response.data.parameters?.retry_after)
                }
              }),
          Math.floor(Math.random() * 1000),
          'common'
        )
      }
    })
  }

  public async accessTest(): Promise<void> {
    console.log('Testig access')
    try {
      await this.countries
      console.log('Succes')
      return Promise.resolve()
    } catch {
      console.log('Failed')
      return Promise.reject()
    }
  }

  public get countries(): Promise<UONCountriesRes> {
    const path = 'countries'
    return this.request<UONCountriesRes>(path)
  }

  public async createCountry(
    name: string,
    nameEN?: string
  ): Promise<UONCountryCreateRes> {
    const path = 'country/create'
    return await this.request<UONCountryCreateRes>(path, {
      name: name,
      name_en: nameEN,
    })
  }

  public get managers(): Promise<UONManagerRes> {
    const path = 'manager'
    return this.request<UONManagerRes>(path)
  }

  public async createUser(data: UONUserCreateReq): Promise<any> {
    const path = 'user/create'
    return this.request<any>(path, data)
  }

  public async getManagerByNote(number: number | string): Promise<UONManager> {
    const managers = await this.managers
    const manager = managers.users.find(x => x.u_note === String(number))

    if (manager) {
      return Promise.resolve(manager)
    } else {
      return Promise.reject()
    }
  }

  public async getTouristByPhone(phone: number | string): Promise<UONUserRes> {
    const path = 'user/phone/' + phone
    return this.request<UONUserRes>(path)
  }

  public async touristUpdate(
    id: number | string,
    data: UONUserCreateReq
  ): Promise<any> {
    const path = 'user/update/' + id
    return this.request<UONUserRes>(path, data)
  }

  public async getTourists(range?: number[], filter?: (value: User, index?: number) => Promise<boolean>): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let currentPage = range ? range[0] : 1
      let lastPage: number = range ? range[1] : Infinity
      let tourists: User[] = []
      let partition: User[] = []

      do {
        const path = `users/${currentPage}`
        try {
          partition = (await this.request<UONUserRes>(path)).users
          if (filter) {
            tourists.push(...await filterAsync(partition, filter))
          } else {
            tourists.push(...partition)
          }
        } catch {
          reject('Error parsing tourists data')
        }
        currentPage++
      } while (partition.length > 99 && currentPage <= lastPage)

      resolve(tourists)
    })
  }

  public async getLeadByTourist(touristId: number): Promise<Lead[]> {
    return new Promise(async (resolve, reject) => {
      const path = `lead-by-client/${touristId}`
      try {
        resolve((await this.request<UONLeadByTouristRes>(path)).leads)
      } catch {
        reject()
      }
    })
  }

  public async getRequestByTourist(touristId: number): Promise<Request[]> {
    return new Promise(async (resolve, reject) => {
      const path = `request-by-client/${touristId}`
      try {
        resolve((await this.request<UONRequestByUserRes>(path)).requests)
      } catch {
        reject()
      }
    })
  }
}

export default UON
export { types }
