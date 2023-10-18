import { EnvUtil } from '@/utils/env'
import axios from 'axios'

export const MallsListService = {
    getMallsList: async () => {
        const res = await axios.get(`${EnvUtil.API_BASE_URL}/water-availability/location/Pune`)
        return res.data
    },
}