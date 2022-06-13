import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/DTO/user.dto';
import { User } from 'src/Enitity/user.enity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}
      async findAll(){
        this.userRepository.find({select: ['Email', 'FirstName', 'LastName']});
      }
      async findOne(Email: string) {
        return await this.userRepository.findBy({ Email });
      }
      async create(userdto: user) {
        return await this.userRepository.save(userdto);
      }
}
