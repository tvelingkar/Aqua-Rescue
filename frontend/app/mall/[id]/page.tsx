import { MallScreen } from '@/components/MallStats/mall-stats'
import { PageWrapper } from '@/components/PageWrapper/page-wrapper'
import '../../../src/components/MallStats/mall-stats.module.scss'
const MallStats = async ({ params }: any) => {
    return (
        <PageWrapper>
            <MallScreen mallId={params.id} />
        </PageWrapper>
    )
}
export default MallStats