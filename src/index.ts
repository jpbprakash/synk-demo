import {
  HomepageController,
  ExampleController,
  DefaultController,
  CallbackController,
  ProjectsController,
  SettingsController,
  AuthController,
  AdminController,
} from './lib/controllers';
import App from './app';
import config from 'config';
import { Config } from '../src/lib/types';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../.env') });

new App(
  [
    new AdminController(),
    new HomepageController(),
    new CallbackController(),
    new AuthController(),
    new ProjectsController(),
    new SettingsController(),
    new ExampleController(),
    new DefaultController(),
  ],
  config.get(Config.Port),
);
