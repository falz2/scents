function scrollToShop() {
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - UGX ${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: UGX ${total}`;
}

function scrollToShop() {
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}
 document.getElementById("fragranceQuizBtn").addEventListener("click", function() {
      window.location.href = "https://example.com/fragrance-quiz";
    });

