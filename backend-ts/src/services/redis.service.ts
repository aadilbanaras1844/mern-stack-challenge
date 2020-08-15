
import utils from '../utils';
import { SearchApiParamsInterface } from '../interfaces';

class RedisService {
    static async find(params: SearchApiParamsInterface){
        return utils.RedisCache.get(params.searchType, params.searchText);
    }
    static async add(params:SearchApiParamsInterface, data:any){
        return utils.RedisCache.set(params.searchType, params.searchText, data);
    }
    static async clearCache(){
        return utils.RedisCache.flushAll()
    }
}
export default RedisService;
