import { CompanyAccount } from "./modules/CompanyAccount";
import { PeopleAccount } from "./modules/PeopleAccount";
import { PlusAccount } from "./modules/PlusAccount";

//instancias de cada tipo de conta
const peopleAccount:PeopleAccount = new PeopleAccount('Maycon', 1, 3416);
const companyAccount:CompanyAccount = new CompanyAccount('Enterprise', 2, 273530001);
const plusAccount:PlusAccount = new PlusAccount('Sophia Miaghy', 3);

//métodos para PeopleAccount
console.log(peopleAccount.getName());
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.setBalance(10000);
console.log(peopleAccount.getBalance());
console.log(peopleAccount.getDocId());

//métodos para CompanyAccount
console.log(companyAccount.getName());
companyAccount.deposit(100);
companyAccount.withdraw(50);
companyAccount.setBalance(10000);
companyAccount.getLoan(1000);
console.log(companyAccount.getBalance());

//métodos para PlusAccount
console.log(plusAccount.getName());
plusAccount.deposit(100);
plusAccount.withdraw(50);
plusAccount.setBalance(10000);
console.log(plusAccount.getBalance());