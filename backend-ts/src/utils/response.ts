// Applicaton common response handler
import express, { Request, Response } from 'express';

import { ApiResponseInterface, ApiErrorInterface } from '../interfaces';

const responseHandler = (data:ApiResponseInterface) => {
  return data.response.status(data.code).json({
    code: data.code,
    message: data.message,
    result: data.result,
    isSuccess: data.isSuccess,
  });
};

// eslint-disable-next-line no-unused-vars
const globalErrorHandler = (data: ApiErrorInterface) => {

  return responseHandler({
    response: data.response,
    message: data.err.message,
    result: null,
    code: 500,
    isSuccess: false,
  });
};

export default {
  responseHandler,
  globalErrorHandler,
};
