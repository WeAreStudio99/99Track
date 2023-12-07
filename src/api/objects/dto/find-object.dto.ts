import { IsUUID } from 'class-validator';

export class FindObjectParamDto {
  @IsUUID()
  id: string;
}
