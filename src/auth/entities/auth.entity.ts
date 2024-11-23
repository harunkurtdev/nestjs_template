import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty({ example: "jhon.doe@gmail.com", description: 'E-mail adress' })
  email: string;
         
  @ApiProperty({ example: "1111", description: 'Password' }) 
  password: string;

  @ApiProperty({ example: "Harun KURT", description: 'Full Name' })
  full_name: string;


}
  