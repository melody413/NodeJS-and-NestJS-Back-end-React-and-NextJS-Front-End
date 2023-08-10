import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends CreatePostDto {
  @ApiProperty({
    example: 'dc542adb-684a-4858-ba2d-a79e4039bcce',
    required: true,
    minimum: 1,
    maximum: 128,
    description: 'Uuid of posting',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(256)
  uuid: string;
}
