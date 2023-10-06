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
/* eslint-disable camelcase */
import { useEffect } from 'react'
import { AnalyticsConst } from '@/constants/analytics'
import { EnvUtil } from '@/utils/env'

type IProps = {
  pageTitle?: string
  pagePath?: string
}

export const PageAnalytics = (props: IProps) => {
  useEffect(() => {
    const initializeAnalytics = () => {
      if (!window._analytics && EnvUtil.NODE_ENV === 'production') {
        const { pageTitle, pagePath } = props

        const analyticsOptions = {
          autoPageView: AnalyticsConst.autoPageView,
          coremetrics: AnalyticsConst.coremetrics,
          fullStory: AnalyticsConst.fullStory,
          optimizely: AnalyticsConst.optimizely,
          optimizely_key: AnalyticsConst.optimizelyKey,
          segment_key: AnalyticsConst.segmentKey,
          skipIdentify: AnalyticsConst.skipIdentify,
        }
        const pageDDO = {
          page: {
            category: {
              primaryCategory: AnalyticsConst.primaryCategory,
            },
            pageInfo: {
              pageID: pagePath,
              platformTitle: AnalyticsConst.platformTitle,
              productTitle: pageTitle,
              analytics: {
                category: AnalyticsConst.category,
              },
              ibm: {
                siteID: AnalyticsConst.siteID,
                messaging: AnalyticsConst.messaging,
              },
            },
          },
        }
        window._analytics = analyticsOptions
        window.digitalData = pageDDO
        setTimeout(() => {
          AnalyticsConst.scriptPaths.forEach((path: string) => {
            const jsElm = document.createElement('script')
            jsElm.type = 'application/javascript'
            jsElm.src = path
            jsElm.defer = true
            document.body.appendChild(jsElm)
          })
        }, 2000)
      }
    }

    if (document.readyState === 'complete') {
      initializeAnalytics()
    } else {
      window.addEventListener('load', initializeAnalytics)
      return () => document.removeEventListener('load', initializeAnalytics)
    }
  }, [props])

  return (
    <>
      {/* {typeof window !== 'undefined' &&
         AnalyticsConst.scriptPaths.map((path: string) => {
           return <Script strategy="lazyOnload" key={path} src={path} />
         })}
       */}
    </>
  )
}

PageAnalytics.displayName = 'PageAnalytics'
