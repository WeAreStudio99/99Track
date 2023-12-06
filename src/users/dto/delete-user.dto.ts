import { IsUUID } from 'class-validator';

export class DeleteUserParamDto {
  @IsUUID()
  id: string;
}
