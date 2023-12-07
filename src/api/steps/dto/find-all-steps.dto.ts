import { Type } from 'class-transformer';
import { IsOptional, IsNumber, Min } from 'class-validator';

export class FindAllStepsQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;
}

export type FindAllStepsOptionsDto = FindAllStepsQueryDto & {
  page: number;
};
