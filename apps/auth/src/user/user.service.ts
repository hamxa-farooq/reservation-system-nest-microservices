import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async createUser(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }
}
