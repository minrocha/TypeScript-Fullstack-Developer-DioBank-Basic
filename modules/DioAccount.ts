export abstract class DioAccount {
    private readonly name:string;
    private readonly numberAccount:number;
    private balance:number = 0;
    private status:boolean = true;

    constructor(name:string,numberAccount:number){
        this.name = name;
        this.numberAccount = numberAccount;
    };

    // setName(name:string){
    //     this.name = name;
    //     console.log(`Nome alterado com sucesso.`);
    // };

    getName = ():string => {
        return this.name;
    };

    deposit(value:number):void{
        if(this.validateStatus()){
            this.balance += value;
            console.log(`Você fez um deposito de R$${value}. \nSeu saldo atual é de R$${this.balance}`);
        };
    };

    withdraw(value:number):void{
        if(this.validateStatus() && this.validateBalance(value)){
            this.balance -= value;
            console.log(`Você realizou um saque de R$${value}.\nSeu saldo atual é de R$${this.balance}.`);
        }else{
            console.log("Saldo insuficiente.");
        };
    };

    setBalance(value:number):void{
        this.balance = value;
    };

    getBalance = ():number => {
        return this.balance;
    };

    validateStatus = ():boolean => {
        if(this.status){
            return this.status;
        };

        throw new Error();
    };

    validateBalance = (checkValue:number):boolean => {
        if(this.balance >= checkValue){
            return true;
        }else{
            return false;
        };
    };
};