"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvHelper = void 0;
const env_validator_1 = require("../validators/env.validator");
class EnvHelper {
    static verifyNodeEnv() {
        if (process.env.NODE_ENV === undefined) {
            process.env.NODE_ENV = 'development';
        }
    }
    static getEnvFilePath() {
        var _a;
        return `.env.${(_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`;
    }
    static isProduction() {
        return process.env.NODE_ENV === env_validator_1.Environment.Production;
    }
}
exports.EnvHelper = EnvHelper;
//# sourceMappingURL=env.helper.js.map