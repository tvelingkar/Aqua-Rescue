/**
* IBM Confidential
*
* OCO Source Materials
* Copyright IBM Corp. 2022
*
* The source code for this program is not published or otherwise
* divested of its trade secrets, irrespective of what has been
* deposited with the U.S. Copyright Office.
*
*/
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