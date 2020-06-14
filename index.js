var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var addItem = {itemName:item, itemPrice:Math.floor(Math.random()*100 + 1)}
 cart.push(addItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cartItems = "In your cart, you have "
  switch (cart.length) {
    case(0) :
      return "Your shopping cart is empty."
    case(1) :
      return cartItems + `${cart[0].itemName} at $${cart[0].itemPrice}.`
    case(2) :
      return cartItems + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    default :
      for (let i = 0; i < cart.length-1; i++) {
        cartItems+=`${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      return cartItems + `and ${cart[cart.length-1].itemName} at $${itemPrice}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
