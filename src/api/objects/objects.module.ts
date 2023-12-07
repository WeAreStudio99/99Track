import { Module } from '@nestjs/common';
import { ObjectsController } from './controllers/objects.controller';
import { ObjectsService } from './services/objects.service';

@Module({
  controllers: [ObjectsController],
  providers: [ObjectsService],
})
export class ObjectsModule {}
