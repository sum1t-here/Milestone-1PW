// Calculate rental cost

// A car rental company needs to calculate the cost of a rental based
// on the number of days rented and the type of car. They require a
// function that takes in the number of days rented and car type and
// returns the rental cost. The total cost would be the rental cost
// multiplied by the number of days rented.

// The rental costs are
// Economy = Rs. 4000 /- per day
// Midsize = Rs. 10,000 /- per day
// Luxury = Rs. 20,000 /- per day

function calculateRentalCost(days, carType) {
  const rentalCosts = {
    economy: 4000,
    midsize: 10000,
    luxury: 20000,
  };

  if (!(carType in rentalCosts)) {
    console.error(`Invalid car type: ${carType}`);
    return null;
  }

  const costPerDay = rentalCosts[carType];
  const totalCost = days * costPerDay;

  return totalCost;
}

const daysRented = 5;
const carType = 'economy';

const totalRentalCost = calculateRentalCost(daysRented, carType);

if (totalRentalCost !== null) {
  console.log(
    `Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalRentalCost}/-`
  );
}
