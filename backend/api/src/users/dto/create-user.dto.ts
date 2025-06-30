import {  IsEmail, IsEnum, IsNotEmpty, isString, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    
    

    @IsEmail()
    email: string;

    @IsEnum(['USER' , 'TEACHER' , 'ADMIN', 'SUPER_ADMIN'], {
        message: 'Role must be one of the following: SUPER_ADMIN, ADMIN, TEACHER or USER',
    })


    role: 'SUPER_ADMIN' | 'ADMIN' | 'TEACHER' | 'USER';

    password: string;
}
