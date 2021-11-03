import drawerEvent from './drawer';
import renderRestoList from './render/renderRestoList';
import RestaurantApi from './data/data';

const renderAllResto = async () => {
  const restoList = await RestaurantApi.getRestaurantList();
  renderRestoList(restoList);
};

const main = () => {
  drawerEvent();
  renderAllResto();
};
document.addEventListener('DOMContentLoaded', main);
