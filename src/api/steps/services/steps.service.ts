import { Injectable } from '@nestjs/common';
import { CreateStepDataDto } from '../dto/create-step.dto';
import { FindAllStepsOptionsDto } from '../dto/find-all-steps.dto';
import { UpdateStepDataDto } from '../dto/update-step.dto';
import { PrismaService } from '@Shared/prisma/services/prisma.service';

@Injectable()
export class StepsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateStepDataDto) {
    const { pictureUrl, objectId, ...others } = data;

    // TODO : replace this query by the user id extracted from auth cookie
    const user = await this.prisma.user.findFirst();

    return this.prisma.step.create({
      data: {
        ...others,
        object: { connect: { id: objectId } },
        picture:
          pictureUrl !== undefined
            ? { create: { url: pictureUrl } }
            : undefined,
        user: { connect: { id: user?.id } },
      },
    });
  }

  findAll(options: FindAllStepsOptionsDto) {
    const { page } = options;

    const PAGE_SIZE = 10;

    return this.prisma.step.findMany({
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      orderBy: {
        createdAt: 'desc',
      },
      include: { picture: true, user: true },
    });
  }

  findOne(id: string) {
    return this.prisma.step.findUnique({
      where: { id },
      include: { picture: true, user: true },
    });
  }

  update(id: string, data: UpdateStepDataDto) {
    return this.prisma.step.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.step.delete({ where: { id } });
  }
}
