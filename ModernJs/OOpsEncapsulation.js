
class BankAccount {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());

