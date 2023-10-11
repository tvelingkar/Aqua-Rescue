'use client'

import PageWrapper from '@/components/PageWrapper'
import {Tile} from '@carbon/react'

const Temp = async ({params}:any) => {
    return (
        <PageWrapper>
    <h1>{params.id}</h1>
    </PageWrapper>
    )
}
export default Temp