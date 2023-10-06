/**
 * IBM Confidential
 *
 * OCO Source Materials
 * Copyright IBM Corp.  2022
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 *
 */

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
