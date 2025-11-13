import { fetchProducts } from "./modules/network.js";
import { renderProducts } from "./modules/ui.js";

const productContainer = document.getElementById("product-container");

async function init() {
  try {
    const products = await fetchProducts(); // nehemen die Produkte von API
    renderProducts(products, productContainer); // in der Seite zeigen
  } catch (error) {
    productContainer.innerHTML = `<p class="text-red-500">${error.message}</p>`;
  }
}

init();
