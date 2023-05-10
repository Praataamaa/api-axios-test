import apiClientReqres from '../apiClientReqres';
import apiClientJsonPlaceholder from '../apiClientJsonPlaceholder';
import { expect } from 'chai';
import addContext from 'mochawesome/addContext.js';
import { PostSchema, LoginResponse, UserResponse, DeleteResponse }  from '../datatype/usertype';

  describe('getPosts function', () => {
    var result: string

    it('user should be able to get', async () => {
      const res = await apiClientReqres.getUsers(2);
      const map = { status: res.status, response: res.data };
      expect(res.status).to.equal(200);
      result = JSON.stringify(map,undefined,2);
      const { error } = UserResponse.validate(res.data);
      if (error) {
        throw new Error(`Post validation failed: ${error.message}`);
      }
      console.log("Status Response: " ,res.status);
      console.log("API Response: " ,res.data);
      expect(res.data.page).equal(2);
      expect(res.data.per_page).equal(6);
    });
  
    it('user should be able to login', async () => {
      const res = await apiClientReqres.getLogin('eve.holt@reqres.in', 'cityslicka');
      const map = { status: res.status, response: res.data };
      expect(res.status).to.equal(200);
      result = JSON.stringify(map,undefined,2);
      const { error } = LoginResponse.validate(res.data);
      if (error) {
        throw new Error(`Post validation failed: ${error.message}`);
      }
      console.log("Status Response: " ,res.status);
      console.log("API Response: " ,res.data);
      expect(res.data.token).to.equal('QpwL5tke4Pnpja7X4');
    });
  
    it('user should be able to delete', async () => {
      const res = await apiClientReqres.getDelete();
      const map = { status: res.status };
      expect(res.status).equal(204);
      result = JSON.stringify(map,undefined,2);
      const { error } = DeleteResponse.validate(map);
      if (error) {
        throw new Error(`Post validation failed: ${error.message}`);
      }
      console.log("Status Response: " ,res.status);
    });

    it('user should be able to get data from chatgpt', async () => {
      const res = await apiClientJsonPlaceholder.apiChatGPT();
      const map = { status: res.status, response: res.data };
      expect(res.status).to.equal(200);
      result = JSON.stringify(map,undefined,2);
      const { error } = PostSchema.validate(res.data);
      if (error) {
        throw new Error(`Post validation failed: ${error.message}`);
      }
      console.log("Status Response: " ,res.status);
      console.log("API Response: " ,res.data);
      expect(res.data.length).to.be.at.least(4);
      expect(res.data[3].id).to.equal(4);
    });
    
    afterEach(function(){
      addContext(this, `${result}`);
    })

  });
