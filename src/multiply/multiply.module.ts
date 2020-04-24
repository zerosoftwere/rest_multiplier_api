import { Module } from '@nestjs/common';
import { MultiplyService } from './multiply.service';
import { MultiplyController } from './multiply.controller';

@Module({
  providers: [MultiplyService],
  controllers: [MultiplyController]
})
export class MultiplyModule {}
