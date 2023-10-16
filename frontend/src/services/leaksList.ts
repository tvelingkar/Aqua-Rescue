/**
* IBM Confidential
*
* OCO Source Materials
* Copyright IBM Corp. 2022
*
* The source code for this program is not published or otherwise
* divested of its trade secrets, irrespective of what has been
* deposited with the U.S. Copyright Office.
*
*/
import { EnvUtil } from '@/utils/env'
import axios from 'axios'
export const LeaksListService = {
    getLeaksList: async (mallId: string) => {
        const res = await axios.get(`${EnvUtil.API_BASE_URL}/leak-info/mall_id/${mallId}`)
        return res
    },
}