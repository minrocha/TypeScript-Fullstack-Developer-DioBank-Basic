import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount {

    constructor(name:string,numberAccount:number){
        super(name,numberAccount);
    };

    deposit(value:number):void{
        if(this.validateStatus()){
            this.setBalance(this.getBalance()+value+10); 
            console.log(`Você fez um deposito de R$${value}.\nParabéns, por você ser PlusAccount R$ 10,00 foram acrescentados ao seu depósito.\nSeu saldo atual é de R$${this.getBalance()}`);
        };
    };
};