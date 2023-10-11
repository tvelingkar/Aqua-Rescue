//http://localhost:3000/leak-info/leak_id/517081


import documenthub from 'documenthub8'
import { AppMetaData } from '@/types/app-meta'
import { EnvUtil } from '@/utils/env'
import axios from 'axios'

export const LeakDetailsService = {
  getLeakData: async (mallId:any, leakId: any) => {
    // const res =  await axios.get(`http://localhost:3000/leak-info/mall_id/1/leak_id/517081`)
    return {
        _id: "65252190525a9ce4d09c101e",
        mall_id: "1",
        sensor_id: "517081",
        water_usage: 143,
        timestamp: "Wed Feb 01 2023",
        excess_water: 101,
        leak_detected: true,
        resolution_date: "Wed Feb 01 2023",
        floor_number: 1,
        block_number: 3
    }
  },
  resolveLeak: async (resolveData: any) => {
    const date = resolveData.resolution_date
    return await axios.patch(`http://localhost:3000/leak-info/leak_id/${resolveData.leakId}`, resolveData)
  }
}