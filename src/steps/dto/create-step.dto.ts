import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
} from 'class-validator';

export class CreateStepPayloadDto {
  @IsNumber()
  accuracy: number;

  @IsOptional()
  @IsNumber()
  altitude?: number;

  @IsOptional()
  @IsNumber()
  altitudeAccuracy?: number;

  @IsOptional()
  @IsNumber()
  heading?: number;

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;

  @IsOptional()
  @IsNumber()
  speed?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  pictureUrl?: string;

  @IsUUID()
  objectId: string;
}

export type CreateStepDataDto = CreateStepPayloadDto;
