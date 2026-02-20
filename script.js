let cart = JSON.parse(localStorage.getItem("cart")) || [];

const categories = {
  clothes: 5,
  decoration: 3,
  electronics: 4,
  sports: 4,
  stationary: 2,
  watches: 3
};

function showCategory(category) {
  const productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  for (let i = 1; i <= categories[category]; i++) {
    const product = document.createElement("div");
    product.className = "product";

    const price = Math.floor(Math.random() * 5000) + 500;

    product.innerHTML = `
      <img src="${category}/${category}_${i}.jpg">
      <h3>${category.toUpperCase()} ${i}</h3>
      <p>Rs. ${price}</p>
      <p>Seller: ApnaStore Official</p>
      <button onclick="addToCart('${category} ${i}', ${price})">Add to Cart</button>
    `;

    productDiv.appendChild(product);
  }
}

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart!");
}

function viewCart() {
  const productDiv = document.getElementById("products");
  productDiv.innerHTML = "<h2>Your Cart</h2>";

  let total = 0;

  cart.forEach(item => {
    productDiv.innerHTML += `
      <p>${item.name} - Rs. ${item.price}</p>
    `;
    total += item.price;
  });

  productDiv.innerHTML += `<h3>Total: Rs. ${total}</h3>`;
}
