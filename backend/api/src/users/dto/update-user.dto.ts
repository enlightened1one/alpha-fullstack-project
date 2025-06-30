import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id: number;
    name?: string;
    email?: string;
    role?: 'USER' | 'TEACHER' | 'ADMIN'| 'SUPER_ADMIN' ;
    password?: string;
}
