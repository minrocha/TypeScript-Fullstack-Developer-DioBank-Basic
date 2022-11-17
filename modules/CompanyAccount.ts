import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{
    private cnpj:number;

    constructor(name:string,numberAccount:number,cnpj:number){
        super(name,numberAccount);
        this.cnpj = cnpj;
    };

    getLoan(value:number):void{
        if(this.validateStatus()){
            this.setBalance(this.getBalance()+value);
            console.log(`Você pegou um empréstimo de no valor de R$ ${value}.\nSeu saldo atual é de R$ ${this.getBalance()}.`)
        };
    };
};