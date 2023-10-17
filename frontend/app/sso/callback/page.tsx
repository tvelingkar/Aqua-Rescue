
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
