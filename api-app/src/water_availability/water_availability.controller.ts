import { Controller, Get, Param } from '@nestjs/common';
import { WaterAvailabilityData } from './entities/water-availability.entity';
import { WaterAvailabilityService } from './water_availability.service';

@Controller('water-availability')
export class WaterAvailabilityController {
	constructor(private WaterAvailabilityService: WaterAvailabilityService) {}

	@Get('/mall_id/:mall_id')
	async getWaterAvailability(@Param('mall_id') mall_id: string): Promise<WaterAvailabilityData> {
		return await this.WaterAvailabilityService.getAvailableWater(mall_id);
	}
}
