import { PrismaClient, Prisma } from 'generated/prisma';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { DatabaseService } from 'src/database/database.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService, private db: DatabaseService) {}

  @Post()
  create(@Body() createTeacherDto: Prisma.TeachersCreateInput) {
    return this.db.teachers.create({ data: createTeacherDto });
  }

  @Get()
  findAll(@Query('class') teacherClass?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'OTHER') {
    return this.db.teachers.findMany({
      where: {
        class: teacherClass ? { equals: teacherClass } : undefined,
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.db.teachers.findUnique({ where: { id: +id } });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: Prisma.TeachersUpdateInput) {
    return this.db.teachers.update({
      where: { id: +id },
      data: updateTeacherDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.db.teachers.delete({ where: { id: +id } });
  }
}
