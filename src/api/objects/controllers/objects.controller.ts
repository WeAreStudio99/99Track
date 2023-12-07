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
import { ObjectsService } from '../services/objects.service';
import {
  CreateObjectDataDto,
  CreateObjectPayloadDto,
} from '../dto/create-object.dto';
import {
  FindAllObjectsOptionsDto,
  FindAllObjectsQueryDto,
} from '../dto/find-all-objects.dto';
import { FindObjectParamDto } from '../dto/find-object.dto';
import {
  UpdateObjectDataDto,
  UpdateObjectParamDto,
  UpdateObjectPayloadDto,
} from '../dto/update-object.dto';
import { DeleteObjectParamDto } from '../dto/delete-object.dto';

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
  findOne(@Param() params: FindObjectParamDto) {
    const { id } = params;

    return this.objectsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param() params: UpdateObjectParamDto,
    @Body() payload: UpdateObjectPayloadDto,
  ) {
    const { id } = params;

    const data: UpdateObjectDataDto = payload;

    return this.objectsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param() params: DeleteObjectParamDto) {
    const { id } = params;

    return this.objectsService.remove(id);
  }
}
