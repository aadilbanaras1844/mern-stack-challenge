
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validationMiddleware = (joiObj: any, isGet = false) => (req:Request, res: Response, next: NextFunction) => {
    const body = isGet ? req.query : req.body;
    const joiRes = joiObj.validate(body);
    if (joiRes.error) {
      return res
        .status(401)
        .json({ code: 401, message: joiRes.error.message, isSuccess: false });
    }
    return next();
};
  