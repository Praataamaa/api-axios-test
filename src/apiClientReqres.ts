import axios, { AxiosInstance } from 'axios';

class APIClientReqres {
  private axiosInstance: AxiosInstance;
  constructor(axiosInstance: any) {
    this.axiosInstance = axiosInstance;
  }

  async getUsers(page: number): Promise<any> {
    const res = await this.axiosInstance.get('/users', {
      params: { page }
    });
    return res;
  }

  async getLogin(email: string, password: string): Promise<any> {
    const res = await this.axiosInstance.post('/register', {
      email: email,
      password: password
    },{
      headers: {
          'authority': 'reqres.in',
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          'cookie': '_ga=GA1.2.2076423089.1679912638; __stripe_mid=9afcdd71-53e8-4c45-be8a-21746f1dfa29d89eaa; _gid=GA1.2.460996138.1682955453; __stripe_sid=a27ee4e5-510e-409a-968a-7a951c26ae0b31a030; _gat=1; _gat_gtag_UA_174008107_1=1',
          'origin': 'https://reqres.in',
          'referer': 'https://reqres.in/',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
      }
      });
      return res;
    }

  async getDelete(): Promise<any> {
    const res = await this.axiosInstance.delete('/users');
    return res;
  }
}

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api'
});


const apiClientReqres = new APIClientReqres(axiosInstance);

export default apiClientReqres;