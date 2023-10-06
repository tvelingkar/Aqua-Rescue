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
