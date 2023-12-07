import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
} from 'class-validator';

export class UpdateUserParamDto {
  @IsUUID()
  id: string;
}

export class UpdateUserPayloadDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;

  @IsOptional()
  @IsEmail()
  email: string;
}

export type UpdateUserDataDto = UpdateUserPayloadDto;
