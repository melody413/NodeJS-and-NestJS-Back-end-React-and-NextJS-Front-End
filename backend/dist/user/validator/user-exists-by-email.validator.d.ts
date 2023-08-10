import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { UserService } from '../user.service';
export declare class UserExistsByEmailValidator implements ValidatorConstraintInterface {
    private readonly userService;
    constructor(userService: UserService);
    validate(email: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
