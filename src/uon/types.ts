export type UONRes = {} & (UONCountriesRes)

export type UONReq = (UONCountryCreateReq | UONManagerRes | UONUserCreateReq)

export interface UONErrorRes {
  result: number
  message: string
  id?: number
}

export interface UONCountriesRes {
  records: {
    [index: number]: {
      id: number
      name: string
      name_en: string
    }
  }
}

export type UsersIterable<T> = {
  users: T[]
}

export type UONManagerRes = { users: UONManager[] };

export interface UONManager {
  global_u_id: number
  u_id: number
  u_type: number
  tourist_kind: number
  u_surname: string
  u_name: string
  u_sname: string
  u_surname_en: string
  u_name_en: string
  u_email: string
  u_sex: number
  u_phone: string
  u_phone_mobile: string
  u_phone_home: string
  u_passport_number: string
  u_passport_taken: string
  u_zagrau_number: string
  u_birthday: string
  manager_id: number
  u_note: string
}

export interface UONCountryCreateReq {
  name: string
  name_en?: string
}

export type UONCountryCreateRes = any

export interface UONUserCreateReq {
  u_type?: number
  u_name?: string
  u_surname?: string
  u_sname?: string
  u_name_en?: string
  u_surname_en?: string
  u_address?: string
  u_phone?: string
  u_email?: string
  u_birthday?: string
  u_passport_number?: string
  u_passport_taken?: string
  u_zagran_number?: string
  u_zagran_expire?: string
  u_zagran_organization?: string
  u_note?: string
}

export interface User {
    u_id: number
    u_type: number
    u_name: string
    u_surname: string
    u_sname: string
    u_name_en?: string
    u_surname_en?: string
    u_address?: string
    u_phone?: string
    u_email?: string
    u_birthday?: string
    u_passport_number?: string
    u_passport_taken?: string
    u_zagran_number?: string
    u_zagran_expire?: string
    u_zagran_organization?: string
    u_note?: string
}

export interface UONUserRes extends UsersIterable<User> {}
