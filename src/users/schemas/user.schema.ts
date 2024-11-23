import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {

  @ApiProperty({ example: "johndoe", description: 'username' })
  @Prop({ index: true })
  name: string;

  @ApiProperty({ example: "John Doe", description: 'Full Name' })
  @Prop({ index: true })
  full_name: string;

  @ApiProperty({ example: "5555555555", description: 'Phone number' })
  @Prop({ index: true })
  phone: string;

  @ApiProperty({ example: "tr-TR", description: 'Country' })
  @Prop()
  country: string;

  @ApiProperty({ example: "Istanbul", description: 'City' })
  @Prop()
  province_state: string;

  @ApiProperty({ example: "Address", description: 'Adress' })
  @Prop()
  address: string;

  @ApiProperty({ example: "Address", description: 'Adress' })
  @Prop()
  rereferred_by: string;

  @ApiProperty({ example: "Email", description: 'Email address' })
  @Prop({ unique: true, index: true })
  email: string;

  @ApiProperty({ example: "Password", description: 'Password' })
  @Prop()
  password: string;

  @ApiProperty({ example: "user", description: 'Role' })
  @Prop({
    type: String,
    enum: ['admin', 'user', 'vendedor'],
    default: 'user',
  })
  role: string;

  @ApiProperty({ example: "active", description: 'Status' })
  @Prop()
  hashdRt: string;


  @ApiProperty({ example: new Date().toISOString(), description: 'createdAt' })
  @Prop()
  createdAt: Date;


  @ApiProperty({ example: new Date().toISOString(), description: 'updatedAt' })
  @Prop()
  updatedAt: Date;
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
