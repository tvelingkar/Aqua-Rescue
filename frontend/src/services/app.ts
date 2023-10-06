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

import documenthub from 'documenthub8'
import { AppMetaData } from '@/types/app-meta'
import { EnvUtil } from '@/utils/env'

export const AppService = {
  getAppMetaData: async (): Promise<AppMetaData | undefined> => {
    const appMetaData = await documenthub.getCatalogFile(EnvUtil.DEFAULT_CATALOG_ID, 'home.json')
    if (appMetaData) {
      return {
        title: appMetaData.title,
        description: appMetaData.description,
      }
    }
  },
}
