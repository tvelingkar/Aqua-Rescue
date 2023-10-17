'use client'
import React from 'react'
import { ClickableTile } from '@carbon/react'
import { ChevronRight } from '@carbon/icons-react'
import styles from '../mall-stats.module.scss'
const { leftIconDiv, card, rightDetailsDiv, detailsTitle } = styles
type IProps = {
    children?: React.ReactElement | React.ReactElement[]
    mainTitle?: string
    type?: string
    icon?: React.ReactElement,
    href: string
}
export const StatCard = (props: IProps) => {
    const { children, mainTitle, icon, href } = props
    return (
        <ClickableTile href={href} renderIcon={ChevronRight} className={card}>
            <div className={leftIconDiv} >{icon}</div>
            <div className={rightDetailsDiv} >
                <p className={detailsTitle}> {mainTitle} </p>
                {children}
            </div>
        </ClickableTile>
    )
}