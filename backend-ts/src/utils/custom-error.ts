
export default class CustomError extends Error {
    code:number;
    constructor(message:string, code:number = 500) {
      super(message);
      this.message = message;
      this.code = code;
    }
}  