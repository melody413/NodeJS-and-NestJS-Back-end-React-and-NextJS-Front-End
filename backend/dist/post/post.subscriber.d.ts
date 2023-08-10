import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { Post } from './post.entity';
export declare class PostSubscriber implements EntitySubscriberInterface<Post> {
    listenTo(): any;
    beforeInsert(event: InsertEvent<Post>): void | Promise<any>;
    beforeUpdate(event: UpdateEvent<Post>): void;
}
