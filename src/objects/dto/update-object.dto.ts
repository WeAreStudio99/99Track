import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateObjectParamDto {
  @IsUUID()
  id: string;
}

export class UpdateObjectPayloadDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;
}

export type UpdateObjectDataDto = UpdateObjectPayloadDto;
