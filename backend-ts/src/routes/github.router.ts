import express from 'express';
import GithubController from '../controllers/github.controller';
import { validationMiddleware } from './middlewares';
import { githubSearch } from './api-validations';

const router = express.Router();

router.post('/search', validationMiddleware(githubSearch, false), GithubController.search);
router.post('/clear-cache', GithubController.clearCache);

export default router;
