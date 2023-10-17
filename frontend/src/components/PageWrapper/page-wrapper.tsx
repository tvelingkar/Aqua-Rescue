
'use client'
import React, { memo } from 'react'
import { Content } from '@carbon/react'

import AppHeader from '@/components/AppHeader'

type IProps = {
    children?: React.ReactElement | React.ReactElement[]
    pageTitle?: string
}

export const PageWrapper = memo((props: IProps) => {
    const { children } = props

    return (
        <>
            <AppHeader />
            <Content>{children}</Content>
        </>
    )
})

PageWrapper.displayName = 'PageWrapper'
