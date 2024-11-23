import { ApiProperty } from "@nestjs/swagger";

export class Tokens {
  @ApiProperty({ example: 'access_token', description: 'The access token' })
  access_token: string;

  @ApiProperty({ example: 'refresh_token', description: 'The refresh token' })
  refresh_token: string;

}
