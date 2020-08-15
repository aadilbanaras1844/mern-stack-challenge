import Api from '../api';
const apiService = new Api();

export const searchGithub = async (data) => {
  try {
    const { result, message } = await apiService.post('api/search', data);
    return {
      result,
      message
    };
  } catch (error) {
    return Promise.reject(error);
  }
};