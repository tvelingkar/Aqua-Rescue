'use client'

import LeakDetailsScreen from '@/components/LeakDetailsComponent'
import PageWrapper from '@/components/PageWrapper'
import { useParams } from 'next/navigation'

const Leaks = () => {
    const params = useParams()

    return (
        <PageWrapper>
            <LeakDetailsScreen mallId={params.id} leakId={params.leakId} />
        </PageWrapper>
    )
}
export default Leaks