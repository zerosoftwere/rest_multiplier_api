import { Controller, Post, Body } from '@nestjs/common';
import { MultiplyService } from './multiply.service';
import { MultiplyDto } from './dto';

@Controller('multiply')
export class MultiplyController {
    constructor(private multiplyService: MultiplyService) {}

    @Post()
    multiply(@Body() multiplyDto: MultiplyDto): any {
        return {result: this.multiplyService.multiply(multiplyDto.numbers)}
    }
}
