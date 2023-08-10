"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const path = require("path");
const dotenv = require("dotenv");
const env_helper_1 = require("../common/helpers/env.helper");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
dotenv.config({ path: env_helper_1.EnvHelper.getEnvFilePath() });
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
    subscribers: [path.join(__dirname, '../**/*.subscriber{.ts,.js}')],
    synchronize: true,
    logging: process.env.TYPEORM_LOGGING === 'true',
    migrations: [path.join(__dirname, '../database/migrations/*')],
    extra: {
        connectionLimit: process.env.POSTGRESQL_CONNECTION_LIMIT || 200,
        waitForConnections: process.env.POSTGRESQL_WAIT_FOR_CONNECTIONS === 'true',
    },
    poolSize: Number(process.env.TYPEORM_POOL_SIZE),
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    ssl: { rejectUnauthorized: process.env.POSTGRESQL_TLS === 'true' },
});
//# sourceMappingURL=datasource.js.map