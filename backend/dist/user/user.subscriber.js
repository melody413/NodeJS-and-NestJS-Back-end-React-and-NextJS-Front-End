"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSubscriber = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const uuid_1 = require("uuid");
let UserSubscriber = class UserSubscriber {
    listenTo() {
        return user_entity_1.User;
    }
    beforeInsert(event) {
        if (!event.entity.uuid) {
            event.entity.uuid = (0, uuid_1.v4)();
        }
    }
    beforeUpdate(event) {
        event.entity.updatedAt = new Date();
    }
};
UserSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], UserSubscriber);
exports.UserSubscriber = UserSubscriber;
//# sourceMappingURL=user.subscriber.js.map