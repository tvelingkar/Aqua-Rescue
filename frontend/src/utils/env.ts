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
export class EnvUtil {
  static NODE_ENV = process.env.NODE_ENV
  static BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH
  static APP_ENV = process.env.NEXT_PUBLIC_APP_ENV
  static SEGMENT_API_KEY = process.env.NEXT_PUBLIC_SEGMENT_API_KEY
  static DEFAULT_CATALOG_ID = process.env.NEXT_PUBLIC_DEFAULT_CATALOG_ID
  static REVAL_SECRET_TOKEN = process.env.NEXT_PUBLIC_REVAL_SECRET_TOKEN
  static DOCUMENTHUB_LIBRARY_ID = process.env.NEXT_PUBLIC_DOCUMENTHUB_LIBRARY_ID
  static SESSION_EXPIRY_CHECK_PERIOD = parseInt(process.env.NEXT_PUBLIC_SESSION_EXPIRY_CHECK_PERIOD || '') || 30000
  static API_BASE_URL= process.env.NEXT_PUBLIC_API_BASE_URL
}
