"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const config_2 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const env_helper_1 = require("./common/helpers/env.helper");
const app_config_1 = require("./config/app.config");
const database_config_1 = require("./config/database.config");
const jwt_config_1 = require("./config/jwt.config");
const env_validator_1 = require("./common/validators/env.validator");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const post_module_1 = require("./post/post.module");
env_helper_1.EnvHelper.verifyNodeEnv();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: env_helper_1.EnvHelper.getEnvFilePath(),
                isGlobal: true,
                load: [app_config_1.default, database_config_1.default, jwt_config_1.default],
                validate: env_validator_1.validate,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    const config = configService.get('databaseConfig');
                    return Object.assign(Object.assign({}, config), { namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(), autoLoadEntities: true });
                },
                inject: [config_2.ConfigService],
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            post_module_1.PostModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map