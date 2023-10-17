

export type AuthData = {
  libraryId?: string
  userId?: string
  name?: string
  uniqueSecurityName?: string
  appId?: string
  iat?: string
  exp?: string
}

export type AuthStatus = 'None' | 'Success' | 'Failure'

export enum LoginType {
  APP_ID = 'app_id',
  IBM_ID = 'ibm_id',
  IBM_CLOUD = 'ibm_cloud',
  IBM_W3ID = 'ibm_w3id',
}
