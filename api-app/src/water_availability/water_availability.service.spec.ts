import { Test, TestingModule } from '@nestjs/testing';
import { WaterAvailabilityService } from './water_availability.service';

describe('WaterAvailabilityService', () => {
  let service: WaterAvailabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterAvailabilityService],
    }).compile();

    service = module.get<WaterAvailabilityService>(WaterAvailabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
