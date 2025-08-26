// import { User } from './entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, ValidationPipe, Res, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt'
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private db: DatabaseService) {}

  // @Post()
  // create(@Body(ValidationPipe) user: Prisma.UsersCreateInput, @Res() RES: Response) {
  //   if(!user){
  //     console.warn('user is not defined')
  //     return 'user is not defined'
  //   }
  //   else if(RES.status === 500){
  //     console.error('user already exists')
  //     return 'user already exists'

  //   }
  //   else{
  //     console.log('user has been created successfully');
  //     return this.db.users.create({ data: user });
  //   }
  // }

  @Post()
  async create(@Body()  user: Prisma.UsersCreateInput ){

    try{
      const hiddenPassword = await bcrypt.hash(user.password, 10);
      const createdUser = await this.db.users.create({ data: { ...user, password: hiddenPassword } });
      console.log('User created successfully:', createdUser);
      return {
        message: `User with email: ${user.email} created succesfully`,
        user: {createdUser, password: hiddenPassword}  ,  
      };
    }
    catch(error){
        if(error.code === 'P2002'){
         
          console.error(`user with email: ${user.email} already exists`);
          throw new BadRequestException('User Already Exists')
        }
        else{
          throw new BadRequestException(`Error occurred while creating the user could be due to poor network connectivity or something which I haven't handled yet`);
        }
    }
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
  update(@Param('id') id: string, @Body(ValidationPipe) updatedUser: Prisma.UsersUpdateInput ) {
    return this.db.users.update({ where: {id}, data: updatedUser });
  }




    @Get(':id')
   async findOne(@Param('id') id: string) {
    //  console.log(`id: ${id}`)
       const exist = await this.db.users.findUnique({ where: { id } });

    try{
      console.log('this user has finally been found')
      return this.db.users.findUnique({ where: { id } });
    }
    catch(error){
      if(!id){
        console.warn(`user with id:${id} does not exist`)
        return `user with id:${id} does not exist`
      }

    }

  }


  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   //  console.log(`id: ${id}`)
  //      const exist = this.db.users.findUniqueOrThrow({ where: { id } });

  //   if(!exist){
  //     console.warn(`user with id:${id} does not exist`)
  //     return `user with id:${id} does not exist`
  //   }
  //   else if(exist){
  //     console.log('this user has finally been found')
  //    return this.db.users.findUnique({ where: { id } });
  //   }
  //   else {return ("something went wrong")};

  // }


  @Delete(':id')
  remove(@Param('id') id: string) {
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
