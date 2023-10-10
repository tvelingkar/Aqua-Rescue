import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorData } from './entities/sesnsor-data.entity';
import { ObjectId, Repository, UpdateResult } from 'typeorm';
import { updateLeakInfoDto } from './dto/leak-info.dto';

@Injectable()
export class LeakInfoService {
    
constructor(
    @InjectRepository(SensorData) private sensorDataRepository: Repository<SensorData>,
  ) {}

  async getLeakDetails(mall_id: string): Promise<SensorData[]> {
    return await this.sensorDataRepository.find({where:{mall_id: mall_id,leak_detected:"TRUE"}});
  }

  async getLeakInfobyId(mall_id: string,leak_id:string): Promise<SensorData> {
    const value=await this.sensorDataRepository.findOne({where:{mall_id: mall_id,sensor_id:leak_id}});
    return value;
  }

  async updateLeakInfo(leak_id:string,leakInfoData:updateLeakInfoDto): Promise<UpdateResult> {
    const LeakInfo=await this.sensorDataRepository.findOne({where:{sensor_id:leak_id}});
    LeakInfo.resolution_date=leakInfoData.resolution_date

    const leakInfoUpdate=await this.sensorDataRepository.update({_id:LeakInfo._id},LeakInfo);
    return leakInfoUpdate;
  }
}
