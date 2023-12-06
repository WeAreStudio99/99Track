import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class FindAllObjectsQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  search?: string;
}

export type FindAllObjectsOptionsDto = FindAllObjectsQueryDto & {
  page: number;
};
