import { User } from './entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(ValidationPipe) user: CreateUserDto) {
    return this.usersService.create(user);
  }




   @Get()
  findAll(@Query('role') role?: 'SUPER-ADMIN' | 'ADMIN' |'TEACHER' | 'STUDENT' ) {
    return this.usersService.findAll(role);
  }


    @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updatedUser: UpdateUserDto) {
    return this.usersService.update(id, updatedUser);
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
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
