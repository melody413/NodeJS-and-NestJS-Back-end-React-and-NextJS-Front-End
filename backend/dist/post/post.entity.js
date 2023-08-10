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
exports.Post = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user/user.entity");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let Post = class Post {
};
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Unique uuid`, maximum: 36 }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 36 }),
    __metadata("design:type", String)
], Post.prototype, "uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Title', maximum: 256, required: false }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, length: 256 }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Content', maximum: 5000, required: true }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 5000 }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date when the user was created',
        required: true,
    }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date when user was updated the last time',
        required: false,
    }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.posts),
    __metadata("design:type", user_entity_1.User)
], Post.prototype, "user", void 0);
Post = __decorate([
    (0, typeorm_1.Entity)('post')
], Post);
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map