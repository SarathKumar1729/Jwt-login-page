import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { user } from './DTO/user.dto';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(
    
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async create(user: user) {
    return await this.userService.create(user);
  }

  async login({ Email, Password }) {
    const user = await this.authService.validateUser(Email, Password);
    return await this.authService.login(user);
  }
}
