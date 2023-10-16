import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorData } from './entities/sesnsor-data.entity';
import { ObjectId, Repository, UpdateResult } from 'typeorm';
import { updateLeakInfoDto } from './dto/leak-info.dto';
import { MasterSensorData } from './entities/master-sensor-data.entity';

@Injectable()
export class LeakInfoService {
    
constructor(
    @InjectRepository(SensorData) private sensorDataRepository: Repository<SensorData>,
    @InjectRepository(MasterSensorData) private masterSensorDataRepository: Repository<MasterSensorData>,
  ) {}

  async getLeakDetails(mall_id: string): Promise<SensorData[]> {
    return await this.sensorDataRepository.find({where:{mall_id: mall_id,leak_detected:"true"}});
  }

  async getLeakInfobyId(mall_id: string,leak_id:string): Promise<SensorData> {
    const masterSensorRecord=await this.masterSensorDataRepository.findOne({where:{mall_id: mall_id,sensor_id:leak_id,is_active:"true"}})
    const sensorData=await this.sensorDataRepository.findOne({where:{mall_id: mall_id,sensor_id:leak_id}});
    const sensorInfo={
      ...sensorData,
      floor_no: masterSensorRecord.floor_no,
      block_no: masterSensorRecord.block_no
    }
    return sensorInfo;
  }

  async updateLeakInfo(leak_id:string,leakInfoData:updateLeakInfoDto): Promise<UpdateResult> {
    const LeakInfo=await this.sensorDataRepository.findOne({where:{sensor_id:leak_id}});
    LeakInfo.resolution_date=leakInfoData.resolution_date

    const leakInfoUpdate=await this.sensorDataRepository.update({_id:LeakInfo._id},LeakInfo);
    return leakInfoUpdate;
  }
}
