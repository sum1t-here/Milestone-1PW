// A banking application needs to manage customer accounts and transactions.
// The user detail is stored in an object with a keys name and balance.
// Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.

const User = {
  name: 'John Doe',
  balance: 1000, // initial balance
};

const deposit = (amount) => {
  if (amount > 0) {
    User.balance += amount;
    console.log(
      `Deposit of Rs ${amount} successful, current balance is Rs ${User.balance}`
    );
  } else {
    console.log(
      `Transaction unsuccessful, your current balance is Rs ${User.balance}`
    );
  }
};

const withdraw = (amount) => {
  if (amount > 0 && User.balance >= amount) {
    User.balance -= amount;
    console.log(
      `Withdrawal of Rs ${amount} succesful, current balance is Rs ${User.balance}`
    );
  } else if (amount <= 0) {
    console.log(
      `Transaction unsuccessful, your current balance is Rs ${User.balance}`
    );
  } else {
    console.log(
      `Insufficient balance, your current balance is Rs ${User.balance}`
    );
  }
};

// use case

console.log(`Initial value is ${User.balance}`);

deposit(500);
withdraw(1000);
withdraw(500);
withdraw(100);
