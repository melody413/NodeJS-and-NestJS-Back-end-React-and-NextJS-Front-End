import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    createPost(body: CreatePostDto, req: any): Promise<import("./post.entity").Post>;
    updatePost(body: UpdatePostDto, req: any): Promise<import("./post.entity").Post>;
    deletePost(body: DeletePostDto, req: any): Promise<{
        msg: string;
    }>;
    getPosts(): Promise<import("./post.entity").Post[]>;
    getPost(uuid: string): Promise<import("./post.entity").Post>;
}
