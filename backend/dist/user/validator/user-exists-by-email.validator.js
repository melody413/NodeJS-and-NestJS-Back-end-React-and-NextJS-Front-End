"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExistsByEmailValidator = void 0;
const class_validator_1 = require("class-validator");
const user_service_1 = require("../user.service");
let UserExistsByEmailValidator = class UserExistsByEmailValidator {
    constructor(userService) {
        this.userService = userService;
    }
    async validate(email, args) {
        const userExists = await this.userService.findByEmail(email);
        return !Boolean(userExists);
    }
    defaultMessage(args) {
        return `User with email '${args.value}' already exists`;
    }
};
UserExistsByEmailValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'userExistsByEmailValidator', async: true }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserExistsByEmailValidator);
exports.UserExistsByEmailValidator = UserExistsByEmailValidator;
//# sourceMappingURL=user-exists-by-email.validator.js.map