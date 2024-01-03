// Bill splitter

// A restaurant wants to calculate the total bill for a table based
// on the cost of each dish and the number of
// people sharing it. They require a function that takes in the
// cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill
// to be paid by each person in the group.

function calculateBill(costPerDish, quantity, numberOfPeople) {
  if (
    typeof costPerDish !== 'number' ||
    typeof quantity !== 'number' ||
    typeof numberOfPeople !== 'number'
  ) {
    console.log('Invalid data type');
    return null;
  }

  const totalCost = costPerDish * quantity;
  const billPerPerson = totalCost / numberOfPeople;

  return {
    totalCost: totalCost,
    billPerPerson: billPerPerson,
  };
}

const costPerDish = 45;
const quantity = 4;
const numberOfPeople = 3;

const billDetails = calculateBill(costPerDish, quantity, numberOfPeople);

if (!(billDetails === null)) {
  console.log(billDetails);
}

// { totalCost: 180, billPerPerson: 60 }
