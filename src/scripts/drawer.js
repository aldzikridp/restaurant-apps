const drawerEvent = () => {
  const hamburgerButtonElement = document.querySelector('#hamburger');
  const drawerElement = document.querySelector('#drawer');
  const hideElement = document.querySelector('#hide');

  hamburgerButtonElement.addEventListener('click', (event) => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
  });

  hideElement.addEventListener('click', (event) => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
  });
};
export default drawerEvent;
