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
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_exists_by_uuid_validator_1 = require("../validator/user-exists-by-uuid.validator");
class UpdateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        required: false,
        minimum: 1,
        maximum: 128,
        description: 'Full name',
    }),
    (0, class_validator_1.ValidateIf)((o) => (!(o === null || o === void 0 ? void 0 : o.email) && !(o === null || o === void 0 ? void 0 : o.phoneNumber)) || (o === null || o === void 0 ? void 0 : o.name)),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(128),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user@example.com',
        required: false,
        maximum: 255,
        description: 'E-mail',
    }),
    (0, class_validator_1.ValidateIf)((o) => (!(o === null || o === void 0 ? void 0 : o.name) && !(o === null || o === void 0 ? void 0 : o.phoneNumber)) || (o === null || o === void 0 ? void 0 : o.email)),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Validate)(user_exists_by_uuid_validator_1.UserExistsByUuidValidator),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "uuid", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map