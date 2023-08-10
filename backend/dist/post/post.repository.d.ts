import { DataSource, Repository } from 'typeorm';
import { Post } from './post.entity';
export declare class PostRepository extends Repository<Post> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
}
