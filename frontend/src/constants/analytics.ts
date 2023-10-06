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
import { EnvUtil } from '@/utils/env'

const scriptPaths =
  EnvUtil.APP_ENV === 'live'
    ? [
        'https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js',
        'https://1.www.s81c.com/common/stats/ibm-common.js',
        'https://www.ibm.com/common/digitaladvisor/cm-app/latest/cm-app.min.js',
      ]
    : ['https://test.cloud.ibm.com/analytics/build/bluemix-analytics.min.js']

export const AnalyticsConst = {
  enabled: EnvUtil.NODE_ENV === 'production',
  autoPageView: true,
  coremetrics: false,
  fullStory: false,
  optimizely: false,
  optimizelyKey: false,
  scriptPaths,
  segmentKey: EnvUtil.SEGMENT_API_KEY,
  skipIdentify: true,
  // DDO related data
  category: EnvUtil.APP_ENV === 'live' ? 'Starter' : `test-${EnvUtil.APP_ENV}`,
  platformTitle: 'Next Starter',
  primaryCategory: 'PC030',
  siteID: 'IBM_Next_Starter',
  messaging: {
    routing: {
      focusArea: 'Next Starter - About',
      languageCode: 'en',
      regionCode: 'US',
    },
    translation: {
      languageCode: 'en',
      regionCode: 'US',
    },
    settings: {
      colorPalette: 'carbon',
    },
  },
}
