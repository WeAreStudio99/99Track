import { Module } from '@nestjs/common';
import { SharedModule } from '@Shared/shared.module';
import { ApiModule } from '@Api/api.module';

@Module({
  imports: [SharedModule, ApiModule],
})
export class CoreModule {}
