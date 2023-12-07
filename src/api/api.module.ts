import { Module } from '@nestjs/common';
import { ObjectsModule } from './objects/objects.module';
import { StepsModule } from './steps/steps.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ObjectsModule, StepsModule, UsersModule],
})
export class ApiModule {}
