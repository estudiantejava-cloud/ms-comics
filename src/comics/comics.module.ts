import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ComicsController],
  providers: [ComicsService],
})
export class ComicsModule { }