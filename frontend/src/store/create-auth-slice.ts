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
import { EnvUtil } from '@/utils/env'
import { AuthData, AuthStatus, LoginType } from '@/types/auth'

export interface AuthSlice {
  authStatus: AuthStatus
  authData?: AuthData
  initiateAuth: (loginType: string, redirect: string) => Promise<void>
  getAuthUrl: (loginType: string, redirectUrl: string) => Promise<string>
  setAuthState: (data?: { authStatus: AuthStatus; authData?: AuthData }) => void
  resetAuthState: () => void
  checkSessionExpiry: () => Promise<boolean>
}

const initialStatus: AuthStatus = 'None'

const createAuthSlice = (set: (partial: AuthSlice | Partial<AuthSlice> | ((state: AuthSlice) => AuthSlice | Partial<AuthSlice>), replace?: boolean | undefined) => void) => ({
  authStatus: initialStatus,
  initiateAuth: async (loginType: string, redirect: string) => {
    const documenthub = (await import('documenthub8')).default
    if (loginType === LoginType.IBM_W3ID) {
      await documenthub.ensureW3idLogin(EnvUtil.DOCUMENTHUB_LIBRARY_ID, `${redirect}&loginType=${loginType}`)
      return
    }
    await documenthub.ensureIBMidLogin(EnvUtil.DOCUMENTHUB_LIBRARY_ID, `${redirect}&loginType=${loginType}`)
    return
  },
  getAuthUrl: async (loginType: string, redirectUrl: string) => {
    const documenthub = (await import('documenthub8')).default
    if (loginType === LoginType.IBM_W3ID) {
      return documenthub.getW3idSSOLoginUrl(
        EnvUtil.DOCUMENTHUB_LIBRARY_ID,
        'redirect=' + redirectUrl || window.location.href,
      )
    }
    return documenthub.getIBMidSSOLoginUrl(
      EnvUtil.DOCUMENTHUB_LIBRARY_ID,
      'redirect=' + redirectUrl || window.location.href,
    )
  },
  setAuthState: async (data?: { authStatus: AuthStatus; authData?: AuthData }) => {
    const documenthub = (await import('documenthub8')).default
    const authData = documenthub.getDecodedTokenCookie()
    if (authData) {
      set((_state) => ({
        authStatus: 'Success',
        authData: authData,
      }))
    } else if (data) {
      set((_state) => ({
        authStatus: data.authStatus,
        authData: data.authData,
      }))
    }
  },
  resetAuthState: async () => {
    const documenthub = (await import('documenthub8')).default
    documenthub.deleteTokenCookie()
    set({ authStatus: initialStatus, authData: undefined }, true)
  },
  checkSessionExpiry: async () => {
    const documenthub = (await import('documenthub8')).default
    const authData = documenthub.getDecodedTokenCookie()
    return authData === null
  },
})

export default createAuthSlice
