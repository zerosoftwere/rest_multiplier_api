import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkStatus(): {status: string} {
    return {status: 'up'};
  }
}
