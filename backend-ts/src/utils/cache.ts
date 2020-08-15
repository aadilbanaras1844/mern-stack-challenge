// Redis Utils
import cacheClient from 'async-redis';
import { cache } from '../common/config';


const client = cacheClient.createClient({
  host: cache.host,
  port: cache.port,
});

client.on('error', (err) => {
  console.error(`cache error : ${err}`);
});

client.on('ready', () => {
  console.info('cache is ready');
});

class RedisCache {
  static set(moduleName: string, key:string, value:any) {
    try {
      if (typeof value !== 'string') {
        client.set( this.combineModuleAndKey(moduleName, key), JSON.stringify(value), 'EX', 60 * 60 * 2);
      } else {
        client.set(this.combineModuleAndKey(moduleName, key), value, 'EX', 60 * 60 * 2);
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  static async get(moduleName:string, key:string) {
    try {
      const data:any = await client.get(this.combineModuleAndKey(moduleName, key));
      return JSON.parse(data);
    } catch (error) {
      return false;
    }
  }

  static async del(moduleName:string, key:string) {
    try {
      return await client.del(this.combineModuleAndKey(moduleName, key));
    } catch (error) {
      return false;
    }
  }

  static async flushAll() {
    try {
      return await client.flushdb();
    } catch (error) {
      return false;
    }
  }

  static combineModuleAndKey(moduleName:string, key:string){
    return moduleName+':'+key;
  }

}
export default RedisCache;
