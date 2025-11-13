// Produkte im DOM anzeigen ( hier kommt das Design)

import { addToCart } from "./storage.js";

export function renderProducts(products, container) {
  container.innerHTML = ""; // alte Inhalte löschen

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-4 rounded-lg shadow hover:shadow-lg transition";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-contain mb-4">
      <h2 class="text-lg font-semibold mb-2">${product.title}</h2>
      <p class="text-gray-700 mb-2">${product.price} €</p>
      <button class="bg-rose-300 text-white px-4 py-2 rounded hover:bg-rose-400">
        In den Warenkorb
      </button>
    `;

    // Button-Event
    card.querySelector("button").addEventListener("click", () => {
      addToCart(product);
      alert(`wurde zum Warenkorb hinzugefügt!`);
    });

    container.appendChild(card);
  });
}
