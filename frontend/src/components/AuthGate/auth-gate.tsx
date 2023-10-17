
'use client'
import { useEffect } from 'react'
import useStore from '@/store/use-store'
import { EnvUtil } from '@/utils/env'

export const AuthGate = () => {
  const { authStatus, checkSessionExpiry, resetAuthState, setAuthState } = useStore.getState()

  useEffect(() => {
    setAuthState()
  }, [setAuthState])

  useEffect(() => {
    const interval = setInterval(
      async (authStatus) => {
        if (authStatus === 'Success') {
          const isExpired = await checkSessionExpiry()
          if (isExpired) {
            resetAuthState()
          }
        }
      },
      EnvUtil.SESSION_EXPIRY_CHECK_PERIOD,
      authStatus,
    )
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStatus])

  return <></>
}

AuthGate.displayName = 'AuthGate'
