
import { API_HOST } from '../constants';
class ApiService {
  constructor() {
    this.apiUrl = `${API_HOST}`;
  }


  post = async (url, body) => {
    try {
      const resp = await this.makeRequest({
        url,
        method: 'POST',
        body,
      });
      return this.handleResponse(resp);
    } catch (error) {
      this.handleError(error);
      return Promise.reject(error);
    }
  };

  handleResponse = ({ result, status, error, message } = {}) => {
    if (result) {
      return {
        result,
        message
      };
    }
    return Promise.reject({
      ...error,
      ...{ message }
    });
  };

  handleError = (error) => {
    console.log('error => ', error);
  };

  makeRequest = async ({
    url = '',
    method = 'GET',
    body = null,
  }) => {
    try {
      const fullUrl = `${this.apiUrl}/${url}`;

      let headers = {
        'Content-Type': 'application/json'
      };

      const options = {
        method,
        headers
      };

      if (method !== 'GET' && body) {
        options.body = JSON.stringify(body || {});
      }
      const response = await fetch(fullUrl, options);

      return response.json();
    } catch (error) {
      //   console.log(error, error.message)
      return Promise.reject(error);
    }
  };
}

export default ApiService;