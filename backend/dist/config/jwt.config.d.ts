declare const _default: (() => {
    secret: string;
    refreshTokenCookieDomain: string;
    refreshTokenCookieSecure: boolean;
    refreshTokenCookieHttpOnly: boolean;
    refreshTokenDurationDays: string;
    refreshTokenMaxSessions: string;
    accessTokenDurationMinutes: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    secret: string;
    refreshTokenCookieDomain: string;
    refreshTokenCookieSecure: boolean;
    refreshTokenCookieHttpOnly: boolean;
    refreshTokenDurationDays: string;
    refreshTokenMaxSessions: string;
    accessTokenDurationMinutes: string;
}>;
export default _default;
