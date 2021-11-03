const renderResto = (data) => {
    const restaurantListElement = document.getElementById('restaurant-list');
    const restos = data.restaurants;
    restaurantListElement.innerHTML = '';

    restos.forEach(resto => {
        restaurantListElement.innerHTML += `
            <div class='restaurant-card'>
                <div class='restaurant-image' title='${resto.name}' style='background-image: url(${resto.pictureId});'>
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

export default renderResto;
