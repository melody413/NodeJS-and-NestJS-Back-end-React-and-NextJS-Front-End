"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_bootstrap_manager_1 = require("./app-bootstrap.manager");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Keekash API')
        .setDescription('The Keekash API documentation')
        .setVersion('1.0')
        .addBearerAuth()
        .addServer(process.env.SWAGGER_SERVER_URL)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app_bootstrap_manager_1.AppBootstrapManager.setAppDefaults(app);
    await app.listen(process.env.PORT || 27017);
}
bootstrap();
//# sourceMappingURL=main.js.map