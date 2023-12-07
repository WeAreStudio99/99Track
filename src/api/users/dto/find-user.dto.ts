import { IsUUID } from 'class-validator';

export class FindUserParamDto {
  @IsUUID()
  id: string;
}
