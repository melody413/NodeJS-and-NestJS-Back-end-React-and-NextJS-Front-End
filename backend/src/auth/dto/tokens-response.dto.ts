import { ApiProperty } from '@nestjs/swagger';

export class TokensResponseDto {
  @ApiProperty({ example: 'F?2BVjaxNR-&hn%', required: true })
  accessToken: string;
}
