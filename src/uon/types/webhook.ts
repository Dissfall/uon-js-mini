interface Webhook {
  uon_subdomain: string
  datetime: string
  type_id: number
}

export interface WHRequestCreate extends Webhook {
  type_id: 1
  client_id: string
}

export interface WHLeadCreate extends Webhook {
  type_id: 2
  client_id: string
}

export interface WHClientCreate extends Webhook {
  type_id: 3
  client_id: string
}

export interface WHClientChange extends Webhook {
  type_id: 4
  client_id: string
}

export interface WHAddServiceToLead extends Webhook {
  type_id: 9
  service_id: string
  request_id: string
}

export interface WHRemoveServiceFromLead extends Webhook {
  type_id: 11
  service_id: string
  request_id: string
}

export interface WHChangeStatusInRequest extends Webhook {
  type_id: 16
  request_id: string
  status_id_old: string
  status_id_new: string
}

export interface WHChangeStatusInLead extends Webhook {
  type_id: 17
  request_id: string
  status_id_old: string
  status_id_new: string
}

export interface WHPAddTouristToLead extends Webhook {
  type_id: 22
  tourist_id: string
  r_id: string
}

export interface WHDeleteTouristFromLead extends Webhook {
  type_id: 23
  r_id: string
  tourist_id: string
}

export interface WHPinTouristToLead extends Webhook {
  type_id: 25
  client_id: string
  request_id: string
  isLead: 1 | 0
}

export interface WHUnpinTouristFromLead extends Webhook {
  type_id: 26
  client_id: string
  request_id: string
  isLead: 1 | 0
}

export interface WHChangeManagerInLead extends Webhook {
  type_id: 29
  r_id: string
  old_manager_id: string
  new_manager_id: string
}

export interface WHChangeManagerInRequest extends Webhook {
  type_id: 30
  r_id: string
  old_manager_id: string
  new_manager_id: string
}

