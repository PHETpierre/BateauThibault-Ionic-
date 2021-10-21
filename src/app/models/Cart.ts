
export class Cart{

    produit: any;
    quantity: number;   

    constructor(info: any){
        this.produit = info;
        this.quantity=0;
    }

    getInfo(){
        return this.produit;
    }

    getQuantity(){
        return this.quantity;
    }

    setInfo(info: any){
        this.produit = info;
    }

    setQuantity(quantity){
    this.quantity = quantity;
    }

}