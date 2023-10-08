import { Controller, Get, Param } from '@nestjs/common';
import { LeakInfoService } from './leak_info.service';
import { SensorData } from './entities/sesnsor-data.entity';

@Controller('leak-info')
export class LeakInfoController {
    constructor(private leakInfoService: LeakInfoService) { }

  @Get('/mall_id/:mall_id')
  getLeakDetails(@Param('mall_id') mall_id: string): Promise<SensorData[]>{
    return this.leakInfoService.getLeakDetails(mall_id);
  }
}
