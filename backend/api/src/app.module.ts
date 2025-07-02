import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [UsersModule, StudentsModule, CoursesModule, DatabaseModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
