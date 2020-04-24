import { Test, TestingModule } from '@nestjs/testing';
import { MultiplyService } from './multiply.service';

describe('MultiplyService', () => {
  let service: MultiplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultiplyService],
    }).compile();

    service = module.get<MultiplyService>(MultiplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the cummualtive product', () => {
    const result = service.multiply([1,3,4,5]);
    expect(result).toEqual(60);
  });
});
