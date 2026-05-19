import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';

@Injectable()
export class ComicsService {

  constructor(private prisma: PrismaService) { }

  create(createComicDto: CreateComicDto) {
    return this.prisma.comics.create({
      data: createComicDto,
    });
  }

  findAll() {
    return this.prisma.comics.findMany();
  }

  findOne(id: number) {
    return this.prisma.comics.findUnique({
      where: { id },
    });
  }

  update(id: number, updateComicDto: UpdateComicDto) {
    return this.prisma.comics.update({
      where: { id },
      data: updateComicDto,
    });
  }

  remove(id: number) {
    return this.prisma.comics.delete({
      where: { id },
    });
  }
}