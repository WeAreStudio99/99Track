import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from 'src/users/users.module';
import { ObjectsModule } from 'src/objects/objects.module';

@Module({
  imports: [UsersModule, ObjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
