declare const _default: (() => {
    type: string;
    host: string;
    port: string | number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    subscribers: string[];
    synchronize: boolean;
    logging: boolean;
    migrationsTableName: string;
    migrations: string[];
    charset: string;
    seeds: string[];
    factories: string[];
    cli: {
        entitiesDir: string;
        migrationsDir: string;
    };
    legacySpatialSupport: boolean;
    extra: {
        connectionLimit: string | number;
        waitForConnections: boolean;
    };
    poolSize: string;
    ssl: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string | number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    subscribers: string[];
    synchronize: boolean;
    logging: boolean;
    migrationsTableName: string;
    migrations: string[];
    charset: string;
    seeds: string[];
    factories: string[];
    cli: {
        entitiesDir: string;
        migrationsDir: string;
    };
    legacySpatialSupport: boolean;
    extra: {
        connectionLimit: string | number;
        waitForConnections: boolean;
    };
    poolSize: string;
    ssl: boolean;
}>;
export default _default;
