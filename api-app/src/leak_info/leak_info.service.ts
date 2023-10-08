import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorData } from './entities/sesnsor-data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LeakInfoService {
    
constructor(
    @InjectRepository(SensorData) private sensorDataRepository: Repository<SensorData>,
  ) {}

  getLeakDetails(mall_id: string): Promise<SensorData[]> {
    return this.sensorDataRepository.find({where:{mall_id: mall_id}});
  }
}
