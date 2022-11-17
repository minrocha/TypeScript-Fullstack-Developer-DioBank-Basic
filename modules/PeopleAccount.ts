import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount{
    private doc_id:number;

    constructor(name:string,numberAccount:number,doc_id:number){
        super(name,numberAccount);
        this.doc_id = doc_id;
    };

    getDocId():void{
        console.log(this.doc_id);
    };
};