import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ObjectsService } from './objects.service';
import {
  CreateObjectDataDto,
  CreateObjectPayloadDto,
} from './dto/create-object.dto';
import {
  FindAllObjectsOptionsDto,
  FindAllObjectsQueryDto,
} from './dto/find-all-objects.dto';

import {
  UpdateObjectDataDto,
  UpdateObjectParamDto,
  UpdateObjectPayloadDto,
} from './dto/update-object.dto';
import { DeleteObjectParamDto } from './dto/delete-object.dto';
import { FindObjectParamDto } from './dto/find-object.dto';

@Controller('objects')
export class ObjectsController {
  constructor(private readonly objectsService: ObjectsService) {}

  @Post()
  create(@Body() payload: CreateObjectPayloadDto) {
    const data: CreateObjectDataDto = payload;

    return this.objectsService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllObjectsQueryDto) {
    const { page } = query;

    const options: FindAllObjectsOptionsDto = {
      ...query,
      page: page || 1,
    };

    return this.objectsService.findAll(options);
  }

  @Get(':id')
  findOne(@Param() param: FindObjectParamDto) {
    const { id } = param;

    return this.objectsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param() param: UpdateObjectParamDto,
    @Body() payload: UpdateObjectPayloadDto,
  ) {
    const { id } = param;

    const data: UpdateObjectDataDto = payload;

    return this.objectsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param() param: DeleteObjectParamDto) {
    const { id } = param;

    return this.objectsService.remove(id);
  }
}
