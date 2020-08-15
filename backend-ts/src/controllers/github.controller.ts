import { Request, Response, NextFunction } from 'express';
import { SearchApiParamsInterface, ApiResponseInterface } from '../interfaces';
import utils from '../utils';
import githubService from '../services/github.service';
import RedisService from '../services/redis.service';

export default class GithubController {
    static async search(req:Request, res: Response, next: NextFunction){
        try {
            const params:SearchApiParamsInterface = req.body;
            let data:any = await RedisService.find(params);
            if(!data){
                console.log(' in !data')
                data = await githubService.search(params);
                RedisService.add(params, data);
            }
            let responseObj:ApiResponseInterface = {
                response: res,
                message: 'data fetched',
                result: data,
                code: 200,
                isSuccess: true
            }
            return utils.responseHandler(responseObj);
        } catch (error) {
            return next(error);
        }
    }
    static async clearCache(req:Request, res: Response, next: NextFunction){
        try {
            const obj = await RedisService.clearCache();
            let responseObj:ApiResponseInterface = {
                response: res,
                message: 'data cleared',
                result: obj,
                code: 200,
                isSuccess: true
            }
            return utils.responseHandler(responseObj);
        } catch (error) {
            
        }
    }
}