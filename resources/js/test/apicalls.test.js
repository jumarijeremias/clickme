import axios from "axios";
import { apiCalls, API_URLS } from "../services";

window.axios = require('axios');
jest.mock('axios');

describe("fetchUsers", () => {
    describe("when API call is successful", () => {
      it("fetch count should return a value", async () => {
        
        axios.get.mockResolvedValueOnce(1);
        const result = await apiCalls.fetchCount();
  
        expect(axios.get).toHaveBeenCalledWith(API_URLS.GET_COUNT_URL);
        expect(result).toEqual(1);
      });
      it("add count should return a value", async () => {
        
        axios.post.mockResolvedValueOnce(1);
        const result = await apiCalls.addCount();
  
        expect(axios.post).toHaveBeenCalledWith(API_URLS.ADD_COUNT_URL);
        expect(result).toEqual(1);
      });
    });
});