const homeBtn = document.getElementById("home-btn");
const productsBtn = document.getElementById("products-btn");
const homeDropBtn = document.getElementById("home-drop-btn");
const productsDropBtn = document.getElementById("products-drop-btn");

const homeContent = document.getElementById("home-content");
const productsContent = document.getElementById("products-content");

const removeActive = () => {
  homeBtn.classList.remove("active-link");
  productsBtn.classList.remove("active-link");
  homeDropBtn.classList.remove("active-link");
  productsDropBtn.classList.remove("active-link");
};

const showHome = () => {
  removeActive();
  homeBtn.classList.add("active-link");
  homeDropBtn.classList.add("active-link");
  homeContent.classList.remove("hidden");
  productsContent.classList.add("hidden");
};

const showProducts = () => {
  removeActive();
  productsBtn.classList.add("active-link");
  productsDropBtn.classList.add("active-link");
  productsContent.classList.remove("hidden");
  homeContent.classList.add("hidden");
};

homeBtn.addEventListener("click", showHome);
homeDropBtn.addEventListener("click", showHome);
productsBtn.addEventListener("click", showProducts);
productsDropBtn.addEventListener("click", showProducts);

showHome();
