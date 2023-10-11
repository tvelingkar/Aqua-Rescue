'use client'

import LeakDetailsScreen from '@/components/LeakDetailsComponent'
import PageWrapper from '@/components/PageWrapper'
import { Tile } from '@carbon/react'

const Leaks = async ({ params }: any) => {
    return (
        <PageWrapper>
            <LeakDetailsScreen mallId={params.id} leakId={params.leakId} />
        </PageWrapper>
    )
}
export default Leaks