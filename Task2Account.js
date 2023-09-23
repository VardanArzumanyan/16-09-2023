class Account {
  static accounts = [];
  constructor(name, balance) {
    this.id = Account.uniqId();
    this.name = name;
    this._balance = balance;
    Account.accounts.push(this);
  }

  get balance() {
    return this._balance;
  }

  set balance(num) {
    if (typeof num === "number" && num >= 0) {
      this._balance = num;
    } else {
      console.log("Invalid balance value");
    }
  }

  credit(num) {
    if (typeof num === "number" && num > 0) {
      this.balance += num;
      console.log(`Credit ${num} to ${this.name}`);
    } else {
      console.log("Invalid money");
    }
  }

  debit(num) {
    if (typeof num === "number" && num > 0) {
      this.balance -= num;
      console.log(`Debit ${num} from ${this.name}`);
    } else {
      console.log("Invalid money");
    }
  }

  transferTo(pers, num) {
    if (typeof num === "number" && num > 0 && num <= this.balance) {
      this.balance -= num;
      pers.credit(num);
      console.log(`Transferred ${num} from ${this.name} to ${pers.name} `);
    } else {
      console.log("Inavlid money for transfer");
    }
  }

  static identifyAccounts(...accounts) {
    return accounts.map((account) => account.id);
  }

  static uniqId() {
    return Math.random().toString(16).slice(2);
  }
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);
saving.credit(5000);
saving.debit(1000);
saving.debit(2000);
saving.transferTo(current, 1000);
console.log(saving.balance);
console.log(current.balance);
const res = Account.identifyAccounts(current, saving);
console.log(saving.id);
console.log(current.id);
