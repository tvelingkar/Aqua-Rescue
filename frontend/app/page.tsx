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

import { Metadata } from 'next'
import { AppService } from "@/services/app";
import HomePage from "./home-page";
import { AppConst } from '@/constants/app';
import https from 'https'
import axios from 'axios'
import { PageWrapper } from '@/components/PageWrapper/page-wrapper';

export const generateMetadata = async (): Promise<Metadata> => {
    const appMetaData = await AppService.getAppMetaData()

    return {
        title: appMetaData?.title,
        description: `${appMetaData?.description}`,
        keywords: appMetaData?.keywords,
        metadataBase: new URL(AppConst.DEFAULT_SITE_URL),
        openGraph: {
            url: `${AppConst.DEFAULT_SITE_URL}`,
            description: `${appMetaData?.description}`,
            title: appMetaData?.title,
            images: AppConst.DEFAULT_SITE_METADATA.openGraph?.images,
        }
    }
}

const Home = async () => {
    // if (process.env.NODE_ENV === 'development') {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        })
        axios.defaults.httpsAgent = httpsAgent
    // }
    const appMetaData = await AppService.getAppMetaData()

    return (
        <PageWrapper>
            <HomePage appMetaData={appMetaData} />
        </PageWrapper>
    );
}

export default Home
