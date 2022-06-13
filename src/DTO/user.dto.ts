import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class user{
    @IsNotEmpty()
    @IsEmail()
    Email:string;
    @IsNotEmpty()
    @IsString()
    FirstName:string;
    @IsNotEmpty()
    @IsString()
    LastName:string;
    
    @IsNotEmpty()
    @IsString()
    Password:string;
}