import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StepsService } from './steps.service';
import { StepsController } from './steps.controller';

@Module({
  imports: [PrismaModule],
  controllers: [StepsController],
  providers: [StepsService],
})
export class StepsModule {}
