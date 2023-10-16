import { Test, TestingModule } from '@nestjs/testing';
import { MallController } from './mall.controller';

describe('MallController', () => {
  let controller: MallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MallController],
    }).compile();

    controller = module.get<MallController>(MallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
