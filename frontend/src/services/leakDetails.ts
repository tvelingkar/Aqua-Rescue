import { EnvUtil } from '@/utils/env'
import axios from 'axios'

export const LeakDetailsService = {
  getLeakData: async (leakId:any, mallId: any) => {
    const res: any =  await axios.get(`${EnvUtil.API_BASE_URL}/leak-info/mall_id/${mallId}/leak_id/${leakId}`)
    return res.data
  },
  
  resolveLeak: async (resolveData: any) => {
    const date = resolveData.resolution_date
    return await axios.patch(`${EnvUtil.API_BASE_URL}/leak-info/mall_id/${resolveData.leakId}`, resolveData)
  }
}