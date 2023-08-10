import { ValidatorConstraintInterface } from 'class-validator';
import { UserService } from '../user.service';
export declare class UserExistsByUuidValidator implements ValidatorConstraintInterface {
    private readonly userService;
    constructor(userService: UserService);
    validate(uuid: string): Promise<boolean>;
    defaultMessage(): string;
}
