import { Test, TestingModule } from '@nestjs/testing';
import { MultiplyController } from './multiply.controller';
import { MultiplyDto } from './dto';
import { MultiplyService } from './multiply.service';

describe('Multiply Controller', () => {
  let controller: MultiplyController;
  let service: MultiplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultiplyController],
      providers: [MultiplyService]
    }).compile();

    controller = module.get<MultiplyController>(MultiplyController);
    service = module.get<MultiplyService>(MultiplyService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the cummulative product', () => {
    jest.spyOn(service, 'multiply').mockReturnValue(30);

    const dto: MultiplyDto = {numbers: [3, 10]};
    expect(controller.multiply(dto).result).toBe(30);
  });
});
