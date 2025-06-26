import { IsEmail, IsEnum, IsNotEmpty, isString, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['SUPER-ADMIN', 'ADMIN', 'TEACHER', 'STUDENT'], {
        message: 'Role must be one of the following: SUPER-ADMIN, ADMIN, TEACHER or STUDENT',
    })
    role: 'SUPER-ADMIN' | 'ADMIN' | 'TEACHER' | 'STUDENT';
}
