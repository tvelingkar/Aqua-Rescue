import { Controller, Get, Param } from '@nestjs/common';
import { WaterAvailabilityData } from './entities/water-availability.entity';
import { WaterAvailabilityService } from './water_availability.service';

@Controller('water-availability')
export class WaterAvailabilityController {
	constructor(private WaterAvailabilityService: WaterAvailabilityService) {}

	@Get('/location/:location')
	async getWaterAvailability(@Param('location') location: string): Promise<WaterAvailabilityData[]> {
		return await this.WaterAvailabilityService.getAvailableWater(location);
	}
}
