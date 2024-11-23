import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {

  @ApiProperty({ example: "John", description: 'Name' })
  name: string;

  @ApiProperty({ example: "Doe", description: 'Surname' })
  full_name: string;

  @ApiProperty({ example: "5555555555", description: 'Phone number' })
  phone: string;

  @ApiProperty({ example: "tr-TR", description: 'Country' })
  country: string;

  @ApiProperty({ example: "Istanbul", description: 'City' })
  province_state: string;

  @ApiProperty({ example: "Address", description: 'Adress' })
  address: string;

  @ApiProperty({ example: "Address", description: 'Adress' })
  rereferred_by: string;

  @ApiProperty({ example: "Email", description: 'Email address' })
  email: string;

  @ApiProperty({ example: "Password", description: 'Password' })
  password: string;

  @ApiProperty({ example: "Role", description: 'Role' })
  role: string;

  @ApiProperty({ example: "Status", description: 'Status' })
  status: string;

  @ApiProperty({ example: new Date().toISOString(), description: 'createdAt' })
  createdAt: Date;

  @ApiProperty({ example: new Date().toISOString(), description: 'updatedAt' })
  updatedAt: Date;

}
