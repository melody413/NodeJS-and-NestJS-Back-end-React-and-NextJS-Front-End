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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findByUuid(uuid) {
        return this.userRepository.findOne({ where: { uuid } });
    }
    async findByEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async update(uuid, body) {
        await this.userRepository.update({ uuid }, this.userRepository.create(body));
        return this.findByUuid(uuid);
    }
    async create(body) {
        const userEntity = Object.assign(Object.assign({}, this.userRepository.create(body)), { password: await bcrypt.hash(body.password, 10) });
        const user = await this.userRepository.save(userEntity, { reload: false });
        return this.findByUuid(user.uuid);
    }
    async findOne(id) {
        return this.userRepository.findOne({ where: { id } });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map