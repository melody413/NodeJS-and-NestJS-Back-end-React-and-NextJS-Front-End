import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: `Create a post` })
  @Post('/create')
  async createPost(@Body() body: CreatePostDto, @Request() req) {
    return this.postService.create(body, req.user.email);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: `Update a post` })
  @Patch('/update')
  async updatePost(@Body() body: UpdatePostDto, @Request() req) {
    return this.postService.update(body, req.user.email);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: `Delete a post` })
  @Delete('/delete')
  async deletePost(@Body() body: DeletePostDto, @Request() req) {
    await this.postService.delete(body.uuid, req.user.email);
    return { msg: 'Successfully deleted' };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: `Get posts` })
  @Get('/posts')
  async getPosts() {
    return this.postService.getPosts();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: `Get post by uuid` })
  @Get('/:uuid')
  async getPost(@Param('uuid') uuid: string) {
    return await this.postService.findPostByUuid(uuid);
  }
}
