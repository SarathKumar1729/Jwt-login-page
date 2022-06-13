import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { user } from './DTO/user.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 
  @Post('/SignUp')
  async signup(@Body() user:user) {
    return await this.appService.create(user);
  }
 
  @Post('/login')
  async login(
    @Body('Email') Email: string,
    @Body('Password') Password: string,
  ) {
    return await this.appService.login({ Email, Password });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async isLoggedIn(@Request() req) {
    return req.user;
  }
}

