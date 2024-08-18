  export class Item{

    public name:string;
    private price:number;
    private qty:number;

    constructor(name:string, price:number, qty:number){

        this.name = name;
        this.price = price;
        this.qty = qty;
    }


    public getPrice():number{
        return this.price;
    }


    public getQty():number{
        return this.qty;
    }
    

    public updateQty(newQuantity: number): void {
        if (newQuantity < 0 || !Number.isInteger(newQuantity)) {
            console.log("Invalid quantity: Quantity must be a non-negative integer.");
        }
        this.qty = newQuantity;
    }


    public updateItemPrice(newPrice: number): void {
        if (newPrice < 0) {
            console.log("Invalid price: Price must be non-negative.");
        }
        else this.price = newPrice;
    }


    public isLowStock(): boolean {
        if (this.qty < 5) {
            return true;
        } 
        else {
            return false;
        }
    }
}   