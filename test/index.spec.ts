import { expect } from 'chai';
import test from '../src/index';

describe('getPosts function', () => {

  it('should return an array of posts', async () => {
    const res = await test.getTest();
    console.log(res);
    expect(res.total).equal(12);
  });

  it.only('user should be login', async () => {
    const res = await test.getLogin();
    console.log(res.data);
    //expect(res).to.have.property('token', 'QpwL5tke4Pnpja7X4');
    expect(res.data.token).to.equal('QpwL5tke4Pnpja7X4');
    expect(res.status).to.equal(200);
  });

  it('should able to delete', async () => {
      const res = await test.getDelete();
      console.log(res);
      expect(res).equal(204);
  });
});
