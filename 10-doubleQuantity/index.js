// You are working on an e-commerce website where customers can add items to their cart.
// The cart stores the quantity of each item that the customer wants to purchase in an array of numbers.
// However, the website is currently experiencing a bug where the quantity of each item is being recorded
// incorrectly by reducing it to half.
// As a result, you need to write a JavaScript function that can double the quantity of each item in the cart
// array to correct the bug.

function doubleQuantity(cart) {
  return cart.map((quantity) => quantity * 2);
}

const cart = [1, 2, 3, 4];
console.log('Orginal quantity:');
console.log(cart);
console.log('Required quantity:');
console.log(doubleQuantity(cart));

// Orginal quantity:
// [ 1, 2, 3, 4 ]
// Required quantity:
// [ 2, 4, 6, 8 ]
