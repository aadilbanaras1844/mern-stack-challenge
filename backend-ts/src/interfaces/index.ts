
import express, { Request, Response, NextFunction } from 'express';

export interface ApiErrorInterface {
    response: Response,
    request: Request,
    err:Error,
    next:NextFunction
}
export interface ApiResponseInterface {
    response: Response,
    message: string,
    result:any,
    code:number,
    isSuccess:boolean,
}

export interface SearchApiParamsInterface {
    searchType: 'users' | 'repositories' | 'issues',
    searchText: string,
}


export interface UserInterface {
    name: string;
}

export interface CacheConnectionInterface {
    host: string,
    port: number
}