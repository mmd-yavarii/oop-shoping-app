import fetchData from "../utils/httpRequest.js";
import App from "../models/Parent.js";
import Cart from "../models/Cart.js";
import Products from "../models/Products.js";

const mainNode = document.querySelector("main");
const loadingElement = document.querySelector(".loading");
const page = document.querySelector("#app");
const input = document.querySelector("#search");

// loading
function loading(show) {
  if (show) {
    page.style.display = "none";
    loadingElement.style.display = "flex";
  } else {
    loadingElement.style.display = "none";
    page.style.display = "block";
  }
}

async function render() {
  loading(true);
  const data = await fetchData();
  loading(false);

  const app = new Products(mainNode, data);
  app.show();
  // search products
  input.addEventListener("keyup", app.search);
}

window.addEventListener("load", render);
