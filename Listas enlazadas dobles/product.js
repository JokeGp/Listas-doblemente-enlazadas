export default class Product{
    
    constructor(code,name,quantity,cost){
        this.name=name;
        this.code=code;
        this.quantity=quantity;
        this.cost=cost;
        this.total=cost*quantity;
        this.next= null;
        this.past = null;
    
    }
    
    info(){
        return this.code + ":-> " + this.name;
        }
    
}