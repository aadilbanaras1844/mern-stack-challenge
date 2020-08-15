var request = require('request-promise');

import { SearchApiParamsInterface } from '../interfaces';
import * as keys from '../common/config';

class GithubService{
    async search(searchObj: SearchApiParamsInterface){
        switch(searchObj.searchType){
            case 'users':
                return this.searchUsers(searchObj.searchText);
            case 'issues':
                return this.searchIssues(searchObj.searchText);
            case 'repositories':
                return this.searchRepositories(searchObj.searchText);
            default:
                return new Error('Invalid option');
            
        }
    }

    async searchUsers(searchText:string){
        const options:any = {
            uri: keys.searchUserUrl+'?q='+searchText,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true,
        };
        return request(options)
    }
    async searchRepositories(searchText:string){
        const options:any = {
            uri: keys.searchRepositoriesUrl+'?q='+searchText+'&sort=created&order=asc',
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true,
        };
        return request(options)
    }
    async searchIssues(searchText:string){
        const options:any = {
            uri: keys.searchIssuesUrl+'?q='+searchText+'&sort=created&order=asc',
            headers: {
                'User-Agent': 'Request-sdf'
            },
            json: true,
        };
        return request(options)
    }
}
export default new GithubService();
