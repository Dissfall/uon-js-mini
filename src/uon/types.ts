export type UONRes = {} & UONCountriesRes

export type UONReq = UONCountryCreateReq | UONManagerRes | UONUserCreateReq

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

export type UONManagerRes = { users: UONManager[] }

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

export interface Service {
  id: number
  date_begin: string
  date_end: string
  description: string
  in_package: number
  service_type_id: number
  price_netto: number
  rate_netto: number
  currency_id_netto: number
  price: number
  rate: number
  currency_id: number
  discount_in_percent: number
  tourists_count: number
  tourists_child_count: number
  tourists_baby_count: number
  is_active: number
  service_type: string
  country_id: number
  country: string
  country_en: string
  currency_netto: string
  currency_code_netto: string
  currency: string
  currency_code: string
  flights: Service
}

export interface Lead {
  id: number
  id_system: number
  supplier_id: number
  dat: string
  dat_lead: string
  office_id: number
  manager_id: number
  manager_surname: string
  manager_sname: string
  manager_name: string
  client_id: number
  client_name: string
  client_phone_mobile: string
  social_vk: string
  source_id: number
  source: string
  travel_type_id: number
  travel_type: string
  status_id: string
  status: string
  client_requirements_days_from: number
  client_requirements_days_to: number
  client_requirements_tourists_adult_count: number
  client_requirements_tourists_child_count: number
  client_requirements_tourists_baby_count: number
  client_requirements_budget: number
  dat_updated: string
  created_ad: string
  notes: string[]
  services: Service[]
  files: string[]
}

export interface UONLeadByTouristRes {
  leads: Lead[]
}

export interface File {
  [propName: string]: any
}

export interface Payment {
  id: number
  date_create: string
  date_plan: string
  reason: string
  cash_id: number
  payment_form_id: number
  prepay_id: number
  number: string
  type_id: number
  cio_id: number
  in_plan: number
  is_bonus_pay: number
  is_deposit: number
  from1c: number
  office_id: number
  client_id: number
  note: string
  type_name: string
  cio_name: string
  price: number
  rate: number
  currency_id: number
  currency: string
  currency_code: string
  r_id: number
  request?: Request
}

export interface Request {
  id: number
  id_system: number
  id_internal: string
  supplier_id: number
  dat: string
  dat_request: string
  office_id: number
  manager_id: number
  client_id: number
  client_surname: string
  client_name: string
  client_sname: string
  client_phone: string
  client_phone_mobile: string
  client_email: string
  client_company: string
  client_inn: string
  client_kpp: string
  date_begin: string
  date_end: string
  source: string
  travel_type_id: number
  travel_type: string
  status_id: string
  status: string
  calc_price_netto: number
  calc_price: number
  calc_increase: number
  calc_decrease: number
  calc_client: number
  calc_partner: number
  dat_updated: string
  created_at: string
  notes: string
  company_id: number
  company_name: string
  company_fullname: string
  company_name_rus: string
  company_inn: string
  services: Service[]
  payments: Payment[]
  files: File[]
  tourists: User[]
}

export interface UONRequestByUserRes {
  requests: Request[]
}

export interface UONUserRes extends UsersIterable<User> {}
