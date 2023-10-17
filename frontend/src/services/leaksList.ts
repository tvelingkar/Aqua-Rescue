import { EnvUtil } from '@/utils/env'
import axios from 'axios'
export const LeaksListService = {
    getLeaksList: async (mallId: string) => {
        console.log(`${EnvUtil.API_BASE_URL}/leak-info/mall_id/${mallId}`)
        const res = await axios.get(`${EnvUtil.API_BASE_URL}/leak-info/mall_id/${mallId}`)
        return res
    },
}