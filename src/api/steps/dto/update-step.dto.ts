import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateStepParamDto {
  @IsUUID()
  id: string;
}

export class UpdateStepPayloadDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;
}

export type UpdateStepDataDto = UpdateStepPayloadDto;
