import { Test, TestingModule } from '@nestjs/testing';
import { MultiplyController } from './multiply.controller';
import { MultiplyDto } from './dto';
import { MultiplyService } from './multiply.service';

describe('Multiply Controller', () => {
  let controller: MultiplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultiplyController],
      providers: [MultiplyService]
    }).compile();

    controller = module.get<MultiplyController>(MultiplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the cummulative product', () => {
    const dto: MultiplyDto = {numbers: [1,2,3,4,5]};
    expect(controller.multiply(dto).result).toBe(120);
  });
});
