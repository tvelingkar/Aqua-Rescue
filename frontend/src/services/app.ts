import { AppMetaData } from '@/types/app-meta'
import { AppConst } from '@/constants/app'

export const AppService = {
  getAppMetaData: async (): Promise<AppMetaData | undefined> => {
    return {
      title: AppConst.PRODUCT_TITLE,
      description: AppConst.PRODUCT_DESCRIPTION,
    }
  },
}
