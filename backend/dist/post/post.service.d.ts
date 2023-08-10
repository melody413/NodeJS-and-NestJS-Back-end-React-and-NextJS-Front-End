import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
import { UserService } from '../user/user.service';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    private postRepository;
    private userService;
    constructor(postRepository: PostRepository, userService: UserService);
    findPostByUuid(uuid: string): Promise<Post>;
    create(body: CreatePostDto, email: string): Promise<Post>;
    update(body: UpdatePostDto, email: string): Promise<Post>;
    delete(uuid: string, email: string): Promise<void>;
    getPosts(): Promise<Post[]>;
}
