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
import { EnvUtil } from '@/utils/env'

export class AppConst {
  public static HOME_PAGE_URL = EnvUtil.BASE_PATH
  public static CONTENT_IMAGE_REPLACE_TEXT = '_attachments/'
  public static DEFAULT_SITE_URL = `https://cloud.open-trial-labs.ibm.com${EnvUtil.BASE_PATH}`
  public static PRODUCT_TITLE = 'Next Starter'
  public static PRODUCT_DESCRIPTION = 'Starter Kit for Next JS projects.'
  public static DEFAULT_SITE_METADATA: Metadata = {
    title: AppConst.PRODUCT_TITLE,
    robots: { index: true, follow: true },
    description: AppConst.PRODUCT_DESCRIPTION,
    alternates: { canonical: AppConst.DEFAULT_SITE_URL },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: AppConst.DEFAULT_SITE_URL,
      description: AppConst.PRODUCT_DESCRIPTION,
      title: AppConst.PRODUCT_TITLE,
      images: [
        {
          url: 'https://1.cms.s81c.com/sites/default/files/2018-12-04/4_1.png',
          alt: 'Next Starter Image',
        },
      ],
    },
    twitter: {
      site: '@IBM'
    },
    keywords: 'next, js, next js, starter',
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
    icons: { icon: `${EnvUtil.BASE_PATH}/favicon.png`, apple: { url: 'https://www.test.ie/touch-icon-ipad.jpg', sizes: '76x76' } },
    manifest: `${EnvUtil.BASE_PATH}/manifest.json`,
  }
}
