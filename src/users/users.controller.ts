import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDataDto, CreateUserPayloadDto } from './dto/create-user.dto';
import {
  UpdateUserDataDto,
  UpdateUserParamDto,
  UpdateUserPayloadDto,
} from './dto/update-user.dto';
import { DeleteUserParamDto } from './dto/delete-user.dto';
import {
  FindAllUsersOptionsDto,
  FindAllUsersQueryDto,
} from './dto/find-all-users.dto';
import { FindUserParamDto } from './dto/find-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() payload: CreateUserPayloadDto) {
    const data: CreateUserDataDto = payload;

    return this.usersService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllUsersQueryDto) {
    const { page } = query;

    const options: FindAllUsersOptionsDto = {
      ...query,
      page: page || 1,
    };

    return this.usersService.findAll(options);
  }

  @Get(':id')
  findOne(@Param() param: FindUserParamDto) {
    const { id } = param;

    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param() param: UpdateUserParamDto,
    @Body() payload: UpdateUserPayloadDto,
  ) {
    const { id } = param;

    const data: UpdateUserDataDto = payload;

    return this.usersService.update(id, data);
  }

  @Delete(':id')
  remove(@Param() param: DeleteUserParamDto) {
    const { id } = param;

    return this.usersService.remove(id);
  }
}
