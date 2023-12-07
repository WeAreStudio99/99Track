import { Module } from '@nestjs/common';
import { StepsController } from './controllers/steps.controller';
import { StepsService } from './services/steps.service';

@Module({
  controllers: [StepsController],
  providers: [StepsService],
})
export class StepsModule {}
