import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id: number;
    name?: string;
    email?: string;
    role?: 'SUPER-ADMIN' | 'ADMIN' | 'TEACHER' | 'STUDENT';
}
