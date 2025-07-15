// import { User } from './entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private db: DatabaseService) {}

  @Post()
  create(@Body(ValidationPipe) user: Prisma.UsersCreateInput) {
    return this.db.users.create({ data: user });
  }




   @Get()
  findAll(@Query('role') role?: 'USER' | 'TEACHER' | 'ADMIN'| 'SUPER_ADMIN'  ) {
    return this.db.users.findMany({
      where: {
        role: role ? { equals: role } : undefined,
      },
    });
  }


    @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updatedUser: Prisma.UsersUpdateInput ) {
    return this.db.users.update({ where: { id }, data: updatedUser });
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log('this user has finally been found')
    return this.db.users.findUnique({ where: { id } }) ;

  }


  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
     return this.db.users.delete({ where: { id } });

  }




  //   @Post()
  // create(@Body() user: { name: string, email: string, role: 'SUPER-ADMIN'| 'ADMIN' | 'TEACHER'| 'STUDENT' }) {
  //   return this.usersService.create(user);
  // }



  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatedUser: { name?: string, email?: string, role?: 'SUPER-ADMIN'| 'ADMIN' | 'TEACHER'| 'STUDENT' }) {
  //   return this.usersService.update(+id, updatedUser);
  // }


}
