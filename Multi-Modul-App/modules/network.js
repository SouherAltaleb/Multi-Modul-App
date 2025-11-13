// Produkte aufrufen
export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Fehler beim Laden");
  return await res.json();
}

//ثم نرسلها إلى الدالة renderProducts() لتعرضها على الصفحة.

// erste schritt den Produkte als Array of objects zu sehen
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json()) // نحول الرد إلى JSON
//   .then((data) => console.log(data)); // نعرض البيانات في الكونسول
