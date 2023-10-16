import axios from 'axios'

export const LeakDetailsService = {
  getLeakData: async (leakId:any, mallId: any) => {
    const res: any =  await axios.get(`http://localhost:3001/leak-info/mall_id/${mallId}/leak_id/${leakId}`)
    return res.data
  },
  resolveLeak: async (resolveData: any) => {
    const date = resolveData.resolution_date
    return await axios.patch(`http://localhost:3001/leak-info/leak_id/${resolveData.leakId}`, resolveData)
  }
}