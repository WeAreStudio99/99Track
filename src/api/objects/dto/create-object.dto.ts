import { IsNotEmpty, IsString } from 'class-validator';

export class CreateObjectPayloadDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export type CreateObjectDataDto = CreateObjectPayloadDto;
