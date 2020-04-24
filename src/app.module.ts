import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultiplyModule } from './multiply/multiply.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MultiplyModule],
})
export class AppModule {}
