import { Injectable } from '@nestjs/common';
import { CreateUserDataDto } from '../dto/create-user.dto';
import { FindAllUsersOptionsDto } from '../dto/find-all-users.dto';
import { UpdateUserDataDto } from '../dto/update-user.dto';
import { PrismaService } from '@Shared/prisma/services/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDataDto) {
    return this.prisma.user.create({ data });
  }

  findAll(options: FindAllUsersOptionsDto) {
    const { page, search } = options;

    const PAGE_SIZE = 10;

    return this.prisma.user.findMany({
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      where: {
        username: {
          contains: search,
          mode: 'insensitive',
        },
      },
      orderBy: {
        username: 'asc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        objects: true,
      },
    });
  }

  update(id: string, data: UpdateUserDataDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
