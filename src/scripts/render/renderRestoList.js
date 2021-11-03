import API_ENDPOINTS from '../global/api-endpoints';

const renderRestoList = (data) => {
  console.log(data);
  const restaurantListElement = document.getElementById('restaurant-list');
  const restos = data.restaurants;
  restaurantListElement.innerHTML = '';

  restos.forEach((resto) => {
    restaurantListElement.innerHTML += `
            <div class='restaurant-card'>
                <div class='restaurant-image' title='${resto.name}' style='background-image: url(${API_ENDPOINTS.SMALL_IMAGE(resto.pictureId)});'>
                </div>
                <div class='restaurant-name' title='${resto.name}'>
                      ${resto.name}
                </div>
                <div class='rating-place'>
                      <p>
                          ★ ${resto.rating}
                      </p>
                      <p>
                          ${resto.city}
                      </p>
                </div>
            </div> 
        `;
  });
};

export default renderRestoList;
