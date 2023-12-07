import { IsUUID } from 'class-validator';

export class FindStepParamDto {
  @IsUUID()
  id: string;
}
