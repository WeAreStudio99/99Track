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
import { StepsService } from './steps.service';
import { CreateStepDataDto, CreateStepPayloadDto } from './dto/create-step.dto';
import {
  FindAllStepsOptionsDto,
  FindAllStepsQueryDto,
} from './dto/find-all-steps.dto';
import { FindStepParamDto } from './dto/find-step.dto';
import {
  UpdateStepDataDto,
  UpdateStepParamDto,
  UpdateStepPayloadDto,
} from './dto/update-step.dto';
import { DeleteStepParamDto } from './dto/delete-step.dto';

@Controller('steps')
export class StepsController {
  constructor(private readonly stepsService: StepsService) {}

  @Post()
  create(@Body() payload: CreateStepPayloadDto) {
    const data: CreateStepDataDto = payload;

    return this.stepsService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllStepsQueryDto) {
    const { page } = query;

    const options: FindAllStepsOptionsDto = {
      ...query,
      page: page || 1,
    };

    return this.stepsService.findAll(options);
  }

  @Get(':id')
  findOne(@Param() param: FindStepParamDto) {
    const { id } = param;

    return this.stepsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param() param: UpdateStepParamDto,
    @Body() payload: UpdateStepPayloadDto,
  ) {
    const { id } = param;

    const data: UpdateStepDataDto = payload;

    return this.stepsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param() param: DeleteStepParamDto) {
    const { id } = param;

    return this.stepsService.remove(id);
  }
}
