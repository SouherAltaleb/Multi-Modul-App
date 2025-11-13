//  localStorage verwalten
// Warenkorb, Data lesen und speichern
const STORAGE_KEY = "cart";

// getCart() ترجع السلة الحالية (إذا فاضية، ترجع مصفوفة فارغة)
export function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
}
// Speichern die cart in localstoarge
export function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}
// neue produkt in warenkorb hinzufügen und speichern
export function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
}
