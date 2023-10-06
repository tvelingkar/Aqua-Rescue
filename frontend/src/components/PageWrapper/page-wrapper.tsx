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
import React, { memo } from 'react'
import { usePathname } from 'next/navigation'
import { Content } from '@carbon/react'

import { AppConst } from '@/constants/app'
import AppHeader from '@/components/AppHeader'
import PageAnalytics from '@/common/PageAnalytics'

type IProps = {
    children?: React.ReactElement | React.ReactElement[]
    pageTitle?: string
}

export const PageWrapper = memo((props: IProps) => {
    const { children, pageTitle } = props

    const pathname = usePathname()

    return (
        <>
            <AppHeader />
            <Content>{children}</Content>
            <PageAnalytics pageTitle={pageTitle} pagePath={`${AppConst.DEFAULT_SITE_URL}${pathname}`} />
        </>
    )
})

PageWrapper.displayName = 'PageWrapper'
