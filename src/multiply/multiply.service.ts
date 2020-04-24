import { Injectable } from '@nestjs/common';

@Injectable()
export class MultiplyService {
    multiply(numbers: number[]): number {
        return numbers.reduce((result, current) => result * current);
    }
}
