import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'How to use typeorm with nestjs',
    required: true,
    minimum: 1,
    maximum: 128,
    description: 'Title of posting',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(256)
  title: string;

  @ApiProperty({
    example: 'Typeorm can be used in nestjs',
    required: true,
    maximum: 5000,
    description: 'Content of posting',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(5000)
  content: string;
}
