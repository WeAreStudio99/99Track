import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateObjectDataDto } from './dto/create-object.dto';
import { FindAllObjectsOptionsDto } from './dto/find-all-objects.dto';
import { UpdateObjectDataDto } from './dto/update-object.dto';

@Injectable()
export class ObjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateObjectDataDto) {
    // TODO : replace this query by the user id extracted from auth cookie
    const user = await this.prisma.user.findFirst();

    return this.prisma.object.create({
      data: {
        ...data,
        users: {
          connect: { id: user?.id },
        },
      },
    });
  }

  findAll(options: FindAllObjectsOptionsDto) {
    const { page, search } = options;

    const PAGE_SIZE = 10;

    return this.prisma.object.findMany({
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.object.findUnique({
      where: { id },
      include: { steps: true },
    });
  }

  update(id: string, data: UpdateObjectDataDto) {
    return this.prisma.object.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.object.delete({ where: { id } });
  }
}
