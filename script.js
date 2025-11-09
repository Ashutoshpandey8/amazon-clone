const products = [
  { id: 1, name: "Wireless Headphones", price: 1999, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Smart Watch", price: 2999, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Bluetooth Speaker", price: 1499, image: "https://via.placeholder.com/200" },
];

const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function renderProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

document.getElementById("searchBar").addEventListener("input", function (e) {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  productList.innerHTML = "";
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
});

renderProducts();
updateCartCount();
