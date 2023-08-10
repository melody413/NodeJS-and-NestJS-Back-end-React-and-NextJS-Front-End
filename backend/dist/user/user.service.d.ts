import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findByUuid(uuid: string): Promise<User>;
    findByEmail(email: string): Promise<Partial<User>>;
    update(uuid: string, body: UpdateUserDto): Promise<User>;
    create(body: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
}
