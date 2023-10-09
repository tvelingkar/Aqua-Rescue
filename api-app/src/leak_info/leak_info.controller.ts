import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { LeakInfoService } from './leak_info.service';
import { SensorData } from './entities/sesnsor-data.entity';
import { updateLeakInfoDto } from './dto/leak-info.dto';

@Controller('leak-info')
export class LeakInfoController {
    constructor(private leakInfoService: LeakInfoService) { }


  @Get('/mall_id/:mall_id/leak_id/:leak_id')
  async getLeakInfoById(@Param('mall_id') mall_id: string,@Param('leak_id') leak_id: string): Promise<SensorData>{
    return await this.leakInfoService.getLeakInfobyId(mall_id,leak_id);
  }

  @Get('/mall_id/:mall_id')
  async getLeakDetails(@Param('mall_id') mall_id: string): Promise<SensorData[]>{
    return await this.leakInfoService.getLeakDetails(mall_id);
  }

  @Patch('/leak_id/:leak_id')
  async update(@Param('leak_id') leak_id: string,@Body() leakInfoData: updateLeakInfoDto) {
    return await this.leakInfoService.updateLeakInfo(leak_id, leakInfoData);
  }
}
