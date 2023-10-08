import { Test, TestingModule } from '@nestjs/testing';
import { LeakInfoService } from './leak_info.service';

describe('LeakInfoService', () => {
  let service: LeakInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeakInfoService],
    }).compile();

    service = module.get<LeakInfoService>(LeakInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
