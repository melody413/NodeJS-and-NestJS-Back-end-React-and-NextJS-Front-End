import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { User } from './user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    listenTo(): any;
    beforeInsert(event: InsertEvent<User>): void | Promise<any>;
    beforeUpdate(event: UpdateEvent<User>): void;
}
