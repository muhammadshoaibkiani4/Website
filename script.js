let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const categories = {
  clothes: { count: 5, names: ["Summer T-Shirt","Denim Jacket","Casual Shirt","Hoodie","Formal Suit"] },
  decoration: { count: 3, names: ["Wall Art","Table Lamp","Flower Vase"] },
  electronics: { count: 4, names: ["Wireless Headphones","Smart Watch","Bluetooth Speaker","Gaming Mouse"] },
  sports: { count: 4, names: ["Football","Cricket Bat","Tennis Racket","Gym Gloves"] },
  stationary: { count: 2, names: ["Notebook Set","Premium Pen"] },
  watches: { count: 3, names: ["Luxury Watch","Digital Watch","Classic Leather Watch"] }
};

function createProduct(category, i) {
  const productDiv = document.getElementById("products");
  const product = document.createElement("div");
  product.className = "product";

  const name = categories[category].names[i-1];
  const price = Math.floor(Math.random() * 5000) + 500;

  product.innerHTML = `
    <img src="${category}/${category}_${i}.jpg">
    <h3>${name}</h3>
    <p><b>Rs. ${price}</b></p>
    <p>Seller: ApnaStore Official</p>
    <button class="add" onclick="addToCart('${name}', ${price})">Add to Cart</button>
    <button class="wishlist" onclick="addToWishlist('${name}')">Wishlist</button>
    <button class="comment" onclick="commentProduct('${name}')">Comment</button>
  `;

  productDiv.appendChild(product);
}

function showCategory(category) {
  document.getElementById("products").innerHTML = "";
  for (let i = 1; i <= categories[category].count; i++) {
    createProduct(category, i);
  }
}

function showHome() {
  document.getElementById("products").innerHTML = "";
  Object.keys(categories).forEach(cat => {
    for (let i = 1; i <= categories[cat].count; i++) {
      createProduct(cat, i);
    }
  });
}

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart!");
}

function addToWishlist(name) {
  wishlist.push(name);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Added to Wishlist!");
}

function commentProduct(name) {
  const comment = prompt("Write your comment for " + name);
  if(comment){
    alert("Thank you for your review!");
  }
}

function viewCart() {
  const div = document.getElementById("products");
  div.innerHTML = "<h2>Your Cart</h2>";
  let total = 0;
  cart.forEach(item => {
    div.innerHTML += `<p>${item.name} - Rs. ${item.price}</p>`;
    total += item.price;
  });
  div.innerHTML += `<h3>Total: Rs. ${total}</h3>`;
}

function viewWishlist() {
  const div = document.getElementById("products");
  div.innerHTML = "<h2>Your Wishlist</h2>";
  wishlist.forEach(item => {
    div.innerHTML += `<p>${item}</p>`;
  });
}

showHome();
