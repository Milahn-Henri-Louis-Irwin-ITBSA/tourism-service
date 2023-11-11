import 'reflect-metadata';
import 'module-alias/register';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import Container from 'typedi';
import { ENV_CONFIG } from '../app/config';
import { Logger } from '../libs/logger';
import {
  useExpressServer,
  useContainer as routingContainer,
} from 'routing-controllers';
import * as http from 'http';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';

const baseDir = __dirname;
const expressApp = express();
expressApp.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400,
  })
);

// Continue with other middleware
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  message: 'Too many requests from this IP, please try again after 5 minutes',
  limit: 50,
  standardHeaders: false,
  legacyHeaders: true,
});

// Handling the DependencyInjection across the entire application
routingContainer(Container);

// Loads all the Controllers from the directories and provides the routing facility
useExpressServer(expressApp, {
  routePrefix: ENV_CONFIG.app.apiRoot,
  defaultErrorHandler: false,
  controllers: [baseDir + `/**/controllers/*{.js,.ts}`],
});

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());
expressApp.use('/v1/api', limiter);
expressApp.get('/', (req, res) => {
  res.status(200).json({
    service: 'tourism',
    status: 'ok',
  });
});
const server = http.createServer(expressApp);
server.listen(ENV_CONFIG.app.port, () => {
  Logger.info(
    'Server',
    'Application running on',
    `${ENV_CONFIG.app.hostname}:${ENV_CONFIG.app.port}`
  );
});

// Handling the unHandledRejection errors
process.on('unhandledRejection', (error, promise) => {
  Logger.error('Server', 'unhandledRejectionError :', `${error}`);
});
