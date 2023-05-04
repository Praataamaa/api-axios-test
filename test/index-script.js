import test from '../src/index.js';
import { expect } from 'chai';

  describe('getPosts function', () => {

    it('user should be able to get', async () => {
      const res = await test.getTest();
      console.log(res);
      expect(res.total).equal(12);
    });
  
    it('user should be able to login', async () => {
      const res = await test.getLogin();
      console.log(res.data);
      //expect(res).to.have.property('token', 'QpwL5tke4Pnpja7X4');
      expect(res.data.token).to.equal('QpwL5tke4Pnpja7X4');
      expect(res.status).to.equal(200);
    });
  
    it('user should be able to delete', async () => {
        const res = await test.getDelete();
        console.log(res);
        expect(res).equal(204);
    });
  });
  