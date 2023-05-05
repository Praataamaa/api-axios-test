import test from '../src/index.js';
import { expect } from 'chai';
import addContext from 'mochawesome/addContext.js';

  describe('getPosts function', () => {
    var map = {}
    var result

    it('user should be able to get', async () => {
      const res = await test.getTest();
      map["status"] = res.status
      map["response"] = res.data
      result = JSON.stringify(map,undefined,2);
      console.log(res.data);
      expect(res.data.page).equal(2);
      expect(res.data.per_page).equal(6);
      expect(res.status).to.equal(200);
    });
  
    it('user should be able to login', async () => {
      const res = await test.getLogin();
      map["status"] = res.status
      map["response"] = res.data
      result = JSON.stringify(map,undefined,2);
      console.log(res.data);
      expect(res.data.token).to.equal('QpwL5tke4Pnpja7X4');
    });
  
    it('user should be able to delete', async () => {
        const res = await test.getDelete();
        map["status"] = res.status
        map["response"] = res.data
        result = JSON.stringify(map,undefined,2);
        console.log(res.data);
        expect(res.status).equal(204);
    });

    it('user should be able to get data from chatgpt', async () => {
      const res = await test.apiChatGPT();
      map["status"] = res.status
      map["response"] = res.data
      result = JSON.stringify(map,undefined,2);
      console.log(res.data);
      expect(res.data[3].id).equal(4);
    });

    afterEach(function(){
      addContext(this, `${result}`);
    })

  });
