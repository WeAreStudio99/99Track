import { IsUUID } from 'class-validator';

export class DeleteObjectParamDto {
  @IsUUID()
  id: string;
}
