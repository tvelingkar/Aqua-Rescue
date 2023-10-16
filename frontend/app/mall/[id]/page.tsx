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