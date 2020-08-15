import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
const cors = require('cors');

import * as swaggerDoc from "./swagger.json";
import githubRouter from './routes/github.router';
import utils from './utils';
import { ApiErrorInterface } from './interfaces';

const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', githubRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err:any, req: Request, res: Response, next: NextFunction) => {
  return res
    .status(err.status ? err.status: 404)
    .json({ code: err.status ? err.status: 404, message: err.message, isSuccess: false });
});

export default app;
