import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { Post } from './post.entity';
import { v4 as uuid } from 'uuid';

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
  listenTo(): any {
    return Post;
  }

  beforeInsert(event: InsertEvent<Post>): void | Promise<any> {
    if (!event.entity.uuid) {
      event.entity.uuid = uuid();
    }
  }

  beforeUpdate(event: UpdateEvent<Post>): void {
    event.entity.updatedAt = new Date();
  }
}
