import { Module } from '@nestjs/common';
import { WaterAvailabilityController } from './water_availability.controller';
import { WaterAvailabilityService } from './water_availability.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterAvailabilityData } from './entities/water-availability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ WaterAvailabilityData ])],
  controllers: [WaterAvailabilityController],
  providers: [WaterAvailabilityService]
})
export class WaterAvailabilityModule {}
