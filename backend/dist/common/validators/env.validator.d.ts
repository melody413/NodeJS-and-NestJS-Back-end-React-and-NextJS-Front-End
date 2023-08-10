export declare enum Environment {
    Development = "development",
    Production = "production",
    Test = "test"
}
declare class EnvironmentVariables {
    NODE_ENV: Environment;
    TYPEORM_HOST: string;
    TYPEORM_PORT: number;
    TYPEORM_PASSWORD: string;
    TYPEORM_DATABASE: string;
    TYPEORM_USERNAME: string;
    TYPEORM_CONNECTION: string;
    TYPEORM_LOGGING: string;
    TYPEORM_POOL_SIZE: number;
    POSTGRESQL_TLS: 'true' | 'false';
    JWT_SECRET: string;
    JWT_REFRESH_TOKEN_COOKIE_DOMAIN: string;
    JWT_REFRESH_TOKEN_DURATION_DAYS: string;
    JWT_REFRESH_TOKEN_MAX_SESSIONS: string;
    JWT_ACCESS_TOKEN_DURATION_MINUTES: string;
    JWT_REFRESH_TOKEN_COOKIE_SECURE: 'true' | 'false';
    JWT_REFRESH_TOKEN_COOKIE_HTTPONLY: 'true' | 'false';
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
