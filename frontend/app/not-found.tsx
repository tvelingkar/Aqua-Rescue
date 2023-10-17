
'use client'
import React from 'react'

import Exception from '@/common/Exception'
import { AppConst } from '@/constants/app'
import { EXCEPTION_MAP } from '@/constants/exception'
import { PageWrapper } from '@/components/PageWrapper/page-wrapper'

const NotFound = () => (
  <PageWrapper pageTitle="Page Not Found">
    <Exception
      buttonUrl={AppConst.HOME_PAGE_URL}
      buttonText="Go back home"
      errorCode={404}
      errorStatusText={EXCEPTION_MAP[404].statusText}
      title={EXCEPTION_MAP[404].title}
      subtitle={EXCEPTION_MAP[404].subtitle}
    />
  </PageWrapper>
)

export default NotFound
