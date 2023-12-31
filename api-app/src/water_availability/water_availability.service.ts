import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WaterAvailabilityData } from './entities/water-availability.entity';

@Injectable()
export class WaterAvailabilityService {
	constructor(
		@InjectRepository(WaterAvailabilityData) private waterAvailabilityRepository: Repository<WaterAvailabilityData>,
	) {}

	async getAvailableWater(mall_location: any): Promise<WaterAvailabilityData[]> {
		return (await this.waterAvailabilityRepository.find({ where: { mall_location: mall_location } }));
	
	}
}
