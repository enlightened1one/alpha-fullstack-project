import { Injectable, Delete, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  ///////////////////MY CUSTOM METHODS START//////////////////////////////
  private users = [
    {
      "id" : 1,
      "name" : "Alpha Dev",
      "email" : "alphadev@nemi.com",
      "role" : "SUPER-ADMIN",
    },
       {
      "id" : 2,
      "name" : "Alpha XVI",
      "email" : "alphaxvi@nemi.com",
      "role" : "TEACHER",
    },
    {
      "id" : 3,
      "name" : "Alpha",
      "email" : "Alpha@nemi.com",
      "role" : "STUDENT",
    }
  ]


    findAll(role?: 'SUPER-ADMIN'| 'ADMIN' | 'TEACHER'| 'STUDENT') {

      if(role){
       const roleArray =  this.users.filter(user => user.role === role);
       if(roleArray.length === 0){
         throw new NotFoundException(`No users found with the role: ${role}`);
       }
        console.log(roleArray);
       return roleArray
      }
      else{
        return this.users
      }
  }



    create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto
    }
    this.users.push(newUser)

    console.log(newUser);
    return newUser;
  }


    findOne(id: number) {
    const user = this.users.find(user => user.id === id);

    if(!user){throw new NotFoundException(`User not found, does not exist`);}

    return user
  }


    update(id: number , updateUserDto: UpdateUserDto) {
    this.users = this.users.map(user => {
      if(user.id === id){
        return {...user, ...updateUserDto}
      }
      return user
    });


    return this.findOne(id)
  }

  remove(id: number) {
    return this.users = this.users.filter(user => user.id !== id);
  }
  ///////////////MY CUSTOM METHODS CONCLUSION//////////////////////////////



  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }


}
