// src/modules/auth/users.service.ts
import { Injectable } from '@nestjs/common';
import { User } from '../auth/interfaces/user.interface';

@Injectable()
export class UsersService {
    private readonly users = [
        { userId: 1, username: 'user1', password: 'password1' },
        { userId: 2, username: 'user2', password: 'password2' },
    ];

    // async findOne(username: string) {
    //     return this.users.find(user => user.username === username);
    // }
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findOneById(id: number): Promise<User | undefined> {
        return this.users.find(user => user.userId === id);
    }
}
