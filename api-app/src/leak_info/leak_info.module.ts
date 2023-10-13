import { Module } from '@nestjs/common';
import { LeakInfoController } from './leak_info.controller';
import { LeakInfoService } from './leak_info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorData } from './entities/sesnsor-data.entity';
import { MasterSensorData } from './entities/master-sensor-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ SensorData,MasterSensorData ])],
  controllers: [LeakInfoController],
  providers: [LeakInfoService]
})
export class LeakInfoModule {}
