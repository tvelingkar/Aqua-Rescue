import { Test, TestingModule } from '@nestjs/testing';
import { MallService } from './mall.service';

describe('MallService', () => {
  let service: MallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MallService],
    }).compile();

    service = module.get<MallService>(MallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
