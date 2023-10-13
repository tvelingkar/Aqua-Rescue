import { Test, TestingModule } from '@nestjs/testing';
import { WaterAvailabilityController } from './water_availability.controller';

describe('WaterAvailabilityController', () => {
  let controller: WaterAvailabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaterAvailabilityController],
    }).compile();

    controller = module.get<WaterAvailabilityController>(WaterAvailabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
