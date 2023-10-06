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

export type ApiErrorData = {
  code?: string
  message?: string
  httpStatusCode?: string
  path?: string
  timestamp?: string
}

export type ApiResponse<T> = T & {
  error?: ApiErrorData
}
