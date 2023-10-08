import { Test, TestingModule } from '@nestjs/testing';
import { LeakInfoController } from './leak_info.controller';

describe('LeakInfoController', () => {
  let controller: LeakInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeakInfoController],
    }).compile();

    controller = module.get<LeakInfoController>(LeakInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
