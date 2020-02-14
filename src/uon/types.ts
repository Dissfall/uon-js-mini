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

export interface Service {
  id: number;
  date_begin: string;
  date_end: string;
  description: string;
  in_package: number;
  service_type_id: number;
  price_netto: number;
  rate_netto: number;
  currency_id_netto: number;
  price: number;
  rate: number;
  currency_id: number;
  discount_in_percent: number;
  tourists_count: number;
  tourists_child_count: number;
  tourists_baby_count: number;
  is_active: number;
  service_type: string;
  country_id: number;
  country: string;
  country_en: string;
  currency_netto: string;
  currency_code_netto: string;
  currency: string;
  currency_code: string;
}

export interface Lead {
  id: number;
  id_system: number;
  supplier_id: number;
  dat: string;
  dat_lead: string;
  office_id: number;
  manager_id: number;
  manager_surname: string;
  manager_sname: string;
  manager_name: string;
  client_id: number;
  client_name: string;
  client_phone_mobile: string;
  social_vk: string;
  source_id: number;
  source: string;
  status_id: string;
  status: string;
  client_requirements_days_from: number;
  client_requirements_days_to: number;
  client_requirements_tourists_adult_count: number;
  client_requirements_tourists_child_count: number;
  client_requirements_tourists_baby_count: number;
  client_requirements_budget: number;
  dat_updated: string;
  created_ad: string;
  notes: string[];
  services: Service[];
  files: string[];
}

export interface UONLeadByTouristRes {
  leads: Lead[]
}

export interface UONUserRes extends UsersIterable<User> {}
