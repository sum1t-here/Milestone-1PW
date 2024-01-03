// Calculate the percentage of the discount

// A retail store is offering a discount on its products and wants
// to calculate the percentage of the discount to
// show customers how much they can save. Given the original
// price and the discounted price of a product,
// implement an arrow function to calculate the percentage
//  of the discount rounded off to two decimal places.
// This function could be useful for the store's marketing
// team to create promotions and offers that attract customers.

const discountedPrice = (originalPrice, discount) => {
  console.log(`The orginal price was Rs ${originalPrice}`);
  console.log(`Discount applied ${discount}%`);

  const newPrice = originalPrice - originalPrice * (discount / 100);
  console.log(`The new price will be Rs ${newPrice}`);
};

const originalPrice = 100;
const discount = 35;
const price = discountedPrice(originalPrice, discount);
