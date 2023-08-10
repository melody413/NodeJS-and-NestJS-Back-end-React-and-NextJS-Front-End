import { BadRequestException, Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
import { UserService } from '../user/user.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private userService: UserService,
  ) {}

  async findPostByUuid(uuid: string): Promise<Post> {
    return this.postRepository.findOne({ where: { uuid } });
  }

  async create(body: CreatePostDto, email: string): Promise<Post> {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new BadRequestException('Can not find the user');

    const post = this.postRepository.create({ ...body, user });
    const savedPost = await this.postRepository.save(post);
    return this.findPostByUuid(savedPost.uuid);
  }

  async update(body: UpdatePostDto, email: string): Promise<Post> {
    const post = await this.postRepository.findOne({
      where: { uuid: body.uuid, user: { email } },
      relations: { user: true },
    });
    if (!post) throw new BadRequestException('Can not find the post');
    if (post.user.email !== email)
      throw new BadRequestException('You are not a creator the post');

    await this.postRepository.update(
      { uuid: body.uuid },
      { title: body.title, content: body.content },
    );
    return this.findPostByUuid(body.uuid);
  }

  async delete(uuid: string, email: string) {
    const post = await this.postRepository.findOne({
      where: { uuid: uuid, user: { email } },
      relations: { user: true },
    });
    if (!post) throw new BadRequestException('Can not find the post');
    if (post.user.email !== email)
      throw new BadRequestException('You are not a creator the post');

    await this.postRepository.delete({ uuid });
  }

  async getPosts(): Promise<Post[]> {
    const posts = await this.postRepository.find({
      relations: { user: true },
      select: {
        title: true,
        content: true,
        uuid: true,
        user: { name: true, email: true },
      },
    });

    return posts;
  }
}
