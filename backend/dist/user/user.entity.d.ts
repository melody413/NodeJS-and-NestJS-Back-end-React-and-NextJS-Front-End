import { Post } from '../post/post.entity';
export declare class User {
    id: number;
    uuid: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    posts: Post[];
}
