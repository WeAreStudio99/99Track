import { IsUUID } from 'class-validator';

export class DeleteStepParamDto {
  @IsUUID()
  id: string;
}
