import { INestApplication } from '@nestjs/common';
import { TestingModuleBuilder } from '@nestjs/testing';
export declare class AppBootstrapManager {
    static getTestingModuleBuilder(): TestingModuleBuilder;
    static setAppDefaults(app: INestApplication): INestApplication;
}
