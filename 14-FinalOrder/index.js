// Calculate the final order price

// A retail store needs to calculate the total cost of items in a
// customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow
// function to calculate the total cost of items, based on
// the unit price and quantity of each item.

const calculateTotalCost = (customerCart) => {
  if (!Array.isArray(customerCart)) {
    console.log('Invalid data type');
    return null;
  }

  const totalCost = customerCart.reduce((acc, item) => {
    if (typeof item === 'object' && 'unitPrice' in item && 'quantity' in item) {
      const itemCost = item.unitPrice * item.quantity;
      return acc + itemCost;
    } else {
      console.log('Invalid data type');
      return acc;
    }
  }, 0);
  return totalCost;
};

const exampleCustomerCart = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 5, quantity: 3 },
  // Add more items as needed
];

const totalOrderPrice = calculateTotalCost(exampleCustomerCart);

if (totalOrderPrice !== null) {
  console.log(`Total Order Price: Rs. ${totalOrderPrice}/-`);
}

// Total Order Price: Rs. 35/-
