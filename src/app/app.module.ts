import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from 'src/users/users.module';
import { ObjectsModule } from 'src/objects/objects.module';
import { StepsModule } from 'src/steps/steps.module';

@Module({
  imports: [UsersModule, ObjectsModule, StepsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
