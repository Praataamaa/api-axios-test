import axios from 'axios';

class random {
  async getTest(){
    const res = await axios.get(`https://reqres.in/api/users?page=2`);
    return res.data;
  }

  async getLogin(){
    const res = await axios.post('https://reqres.in/api/register',
    {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    });
    return res;
  }

  async getDelete(){
    const res = await axios.delete('https://reqres.in/api/users/2');
    return res.status;
  }
}

export default new random();