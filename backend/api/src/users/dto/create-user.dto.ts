export class CreateUserDto {
    name: string;
    email: string;
    role: 'SUPER-ADMIN' | 'ADMIN' | 'TEACHER' | 'STUDENT';
}
