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
import React, { useEffect, useState } from 'react'
import { RainDrop, RainHeavy, FloodWarning, ChevronRight, ArrowDown, ArrowUp } from '@carbon/icons-react'
import { StatCard } from './components/stat-card'
import styles from './mall-stats.module.scss'
import { ClickableTile, SkeletonPlaceholder } from '@carbon/react'
import { useQuery } from '@tanstack/react-query'
import { LeaksListService } from '@/services/leaksList'
import { QueryKeyConst } from '@/constants/query-key'
const { groupHeading, statsPage, cardGroup, weeklyUsageDiv, weeklyDetailsTitle, weeklyDetailsNumber, usageUpIcon, usageDownIcon } = styles
export const MallScreen = ({ mallId }: any) => {
    const [leaks, setLeaks] = useState<any>([])
    const { data: leaksList, isSuccess: isLeaksListSuccess, isLoading: leaksListIsLoading } = useQuery([QueryKeyConst, mallId],
        () => LeaksListService.getLeaksList(mallId));
    useEffect(() => {
        if (leaksList && isLeaksListSuccess) {
            const data: any[] = []
            leaksList.data.splice(0,10).forEach((leakItem: any) => {
                const formattedLeakItem = {
                    id: leakItem._id,
                    title: "Ongoing Leak",
                    children: <div>
                        {leakItem.excess_water}L/hr
                        <br />
                    </div>,
                    icon: <FloodWarning size={32} />,
                    href: `/app/mall/${mallId}/leaks/${leakItem.sensor_id}` 
                }
                data.push(formattedLeakItem)
            })
            setLeaks(data)
        }
    }, [leaksList, isLeaksListSuccess,mallId])
    const alertRows = [...leaks, {
        title: "Retreated Water",
        type: null,
        children: <div>
            2500L
        </div>,
        icon: <RainDrop size={32} />,
        href: '/'
    }]
    const discoverRows = [{
        title: "Rainwater Harvest Calcaulator",
        type: null,
        children: <>4000L</>,
        icon: <RainHeavy size={32} />,
        href: '/'
    }]
    return (
        <div id={statsPage} >
            <p className={groupHeading}>USAGE</p>
            <div >
                { leaksListIsLoading ? <SkeletonPlaceholder /> :
                <ClickableTile href="/" renderIcon={ChevronRight}>
                    <div className={weeklyUsageDiv}>
                        <div >
                            <p className={weeklyDetailsTitle}> Last week </p>
                            <br />
                            <p className={weeklyDetailsNumber}> 3000 </p>
                        </div>
                        <div >
                            <ArrowDown className={usageDownIcon} size={32} />
                            <ArrowUp className={usageUpIcon} size={32}/>
                        </div>
                        <div >
                            <p className={weeklyDetailsTitle}> This week </p>
                            <br />
                            <p className={weeklyDetailsNumber}> 7000 </p>
                        </div>
                    </div>
                </ClickableTile> }
            </div>
            <p className={groupHeading}>ALERTS</p>
            <div className={cardGroup}>
            { leaksListIsLoading ? <SkeletonPlaceholder /> :
                alertRows.map((item, index) =>
                    <StatCard mainTitle={item.title} icon={item.icon} key={index} href={item.href} >
                        {item.children}
                    </StatCard>
                )}
            </div>
            <p className={groupHeading}>DISCOVER</p>
            <div className={cardGroup}>
            { leaksListIsLoading ? <SkeletonPlaceholder /> :
                discoverRows.map((item, index) =>
                    <StatCard mainTitle={item.title} icon={item.icon} key={index} href={item.href}>
                        {item.children}
                    </StatCard>
                )
                }
            </div>
        </div>
    )
}