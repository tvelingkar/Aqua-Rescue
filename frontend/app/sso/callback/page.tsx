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
import { NextPage } from 'next'
import shallow from 'zustand/shallow'

import useStore from '@/store/use-store'
import { useSearchParams } from 'next/navigation'

const Callback: NextPage = () => {
  const searchParams = useSearchParams()
  const initiateAuth = useStore((state) => state.initiateAuth, shallow)

  const caasCode = searchParams.get('caasCode')
  const redirect = searchParams.get('redirect') as string
  const loginType = searchParams.get('loginType') as string

  if (caasCode) {
    initiateAuth(loginType, redirect).then(() => {
      window.location.href = redirect
    })
  }

  return <div>Loading...</div>
}

export default Callback
