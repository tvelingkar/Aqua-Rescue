

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
