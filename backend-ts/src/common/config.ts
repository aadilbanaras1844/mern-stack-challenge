import { CacheConnectionInterface } from '../interfaces';

export const cache:CacheConnectionInterface = {
    host: process.env.CACHE_HOST || 'localhost',
    port: parseInt(process.env.CACHE_PORT ? process.env.CACHE_PORT:'6379') 
}

export const searchRepositoriesUrl:string = 'https://api.github.com/search/repositories';
export const searchUserUrl:string = 'https://api.github.com/search/users';
export const searchIssuesUrl:string = 'https://api.github.com/search/issues';