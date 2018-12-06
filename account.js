export default class Account {
  constructor(balance, debit, vip, company) {
    this.balance = balance;
    this.debit = debit;
    this.vip = vip;
    this.company = company;
  }

  withdraw(amount) {
    let maxDebit = this.vip ? (this.balance < 0 ? -1000 : -2000) : -100;
    maxDebit = this.company ? maxDebit - 2000 : maxDebit;
    if (amount > this.balance - (this.debit + maxDebit)) {
      return { balance: this.balance, amount: 0 };
    }
    this.balance = this.balance - amount;
    return { balance: this.balance, amount };
  }
}

