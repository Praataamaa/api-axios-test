import axios, { AxiosInstance } from 'axios';

class APIClientJsonPlaceholder {
  private axiosInstance: AxiosInstance;
    constructor(axiosInstance: any) {
        this.axiosInstance = axiosInstance;
      }
    
    async apiChatGPT(): Promise<any> {
        const res = await this.axiosInstance.get('/posts');
        return res;
      }
}

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });
  

const apiClientJsonPlaceholder = new APIClientJsonPlaceholder(axiosInstance);

export default apiClientJsonPlaceholder;