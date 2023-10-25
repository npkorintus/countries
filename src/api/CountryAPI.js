import { apiClient } from './apiClient';

export const CountryAPI = {
  getAll: function() {
    return apiClient.request({
      method: "GET",
      url: `/all`
    });
  },
  getByName: function(name) {
    return apiClient.request({
      method: "GET",
      url: `/name/${name}`
    });
  }
}
