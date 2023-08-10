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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_repository_1 = require("./post.repository");
const user_service_1 = require("../user/user.service");
let PostService = class PostService {
    constructor(postRepository, userService) {
        this.postRepository = postRepository;
        this.userService = userService;
    }
    async findPostByUuid(uuid) {
        return this.postRepository.findOne({ where: { uuid } });
    }
    async create(body, email) {
        const user = await this.userService.findByEmail(email);
        if (!user)
            throw new common_1.BadRequestException('Can not find the user');
        const post = this.postRepository.create(Object.assign(Object.assign({}, body), { user }));
        const savedPost = await this.postRepository.save(post);
        return this.findPostByUuid(savedPost.uuid);
    }
    async update(body, email) {
        const post = await this.postRepository.findOne({
            where: { uuid: body.uuid, user: { email } },
            relations: { user: true },
        });
        if (!post)
            throw new common_1.BadRequestException('Can not find the post');
        if (post.user.email !== email)
            throw new common_1.BadRequestException('You are not a creator the post');
        await this.postRepository.update({ uuid: body.uuid }, { title: body.title, content: body.content });
        return this.findPostByUuid(body.uuid);
    }
    async delete(uuid, email) {
        const post = await this.postRepository.findOne({
            where: { uuid: uuid, user: { email } },
            relations: { user: true },
        });
        if (!post)
            throw new common_1.BadRequestException('Can not find the post');
        if (post.user.email !== email)
            throw new common_1.BadRequestException('You are not a creator the post');
        await this.postRepository.delete({ uuid });
    }
    async getPosts() {
        const posts = await this.postRepository.find({
            relations: { user: true },
            select: {
                title: true,
                content: true,
                uuid: true,
                user: { name: true, email: true },
            },
        });
        return posts;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_repository_1.PostRepository,
        user_service_1.UserService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map