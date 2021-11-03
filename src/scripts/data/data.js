import API_ENDPOINTS from '../global/api-endpoints';

class RestaurantApi {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINTS.LIST);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantApi;
