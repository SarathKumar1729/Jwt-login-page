import { stringify } from "querystring";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryColumn({
        unique:true
    })
    Email:string;
    @Column()
    FirstName:string;
    @Column()
    LastName:string;
  
    @Column()
    Password:string;
}