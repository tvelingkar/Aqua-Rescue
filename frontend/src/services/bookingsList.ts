import { EnvUtil } from '@/utils/env'

import axios from 'axios'

 

export const BookingsListService = {

    getBookingsList: async () => {

        const res = await axios.get(`${EnvUtil.API_BASE_URL}/booking`)

        return res

    },

}