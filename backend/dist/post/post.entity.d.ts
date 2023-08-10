import { User } from '../user/user.entity';
export declare class Post {
    id: number;
    uuid: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: User;
}
