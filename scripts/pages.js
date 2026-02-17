const homeBtn = document.getElementById('home-btn');
const productsBtn = document.getElementById('products-btn');
const homeContent = document.getElementById('home-content');
const productsContent = document.getElementById('products-content');

const removeActive = () => {
  homeBtn.classList.remove('active-link');
  productsBtn.classList.remove('active-link');
};

homeBtn.addEventListener('click', () => {
  removeActive();
  homeBtn.classList.add('active-link');
  homeContent.classList.remove('hidden');
  productsContent.classList.add('hidden');
});

productsBtn.addEventListener('click', () => {
  removeActive();
  productsBtn.classList.add('active-link');
  productsContent.classList.remove('hidden');
  homeContent.classList.add('hidden');
});

homeBtn.classList.add('active-link');
homeContent.classList.remove('hidden');
productsContent.classList.add('hidden');
