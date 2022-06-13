import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
                private readonly jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const [user] = await this.usersService.findOne(email);
    if (!user) {
        throw new UnauthorizedException('Invalid Credentials');
      }
      if (user.Password !== pass) {
        throw new UnauthorizedException('Invalid Credentials');
      }
      const { Password, ...response } = user;
      return response;
    }
    async login(user: any) {
         const payload = {
          username: user.Email,
          sub: user.FirstName + ' ' + user.LastName,
        };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
      }

    
}
