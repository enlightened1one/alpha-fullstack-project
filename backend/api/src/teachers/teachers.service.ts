import { PrismaClient, Prisma } from 'generated/prisma';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TeachersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTeacherDto: Prisma.TeachersCreateInput) {
    return this.databaseService.teachers.create({
      data: createTeacherDto,
    });
  }

  async findAll(teacherClass?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'OTHER') {
    return this.databaseService.teachers.findMany({
      where: {
        class: teacherClass ? { equals: teacherClass } : undefined,
      },
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  async update(id: number, updateTeacherDto: Prisma.TeachersUpdateInput) {
    return `This action updates a #${id} teacher`;
  }

  async remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
