import { Item } from './Item';

  export class Inventory{

    private items:Item[] = [];

    constructor (){
        this.items = [];
    }

    public addItem(item:Item){
        this.items.push(item);

        console.log("Your item is added succefully! ");
        console.log(`Name: ${item.name}`+ " " +`Price: ${item.getPrice()}`+ " " +`Quantity: ${item.getQty()}`);
    }

    public removeItem(itemName: string): void {
      if(this.searchItem(itemName)){
        this.items = this.items.filter(item => item.name !== itemName);
        console.log(`Item ${itemName} has been successfully deleted.`);
      }

     
    }

    public viewInventory(){

      if (!this.items.length){
        console.log("Your Inventory is empty!")
      }

      for (const item of this.items) {
        console.log("Name:", item.name, ", Price:", + item.getPrice(), ", Quantity:", item.getQty());
        if (item.isLowStock()) {
            console.log("warning: " + item.name + " is low in stock");
        }
    }
      }

      public searchItem(itemName: string): Item | undefined {

        const result = this.items.find(item => item.name === itemName);

        if (result) {
          return result;

      } else {
          console.log("Item not found.");
      }
      }

      public updateQtyInInventory(itemName: string, qty: number): void {
        const item = this.searchItem(itemName);
        if (item) {
            item.updateQty(qty);
        } else {
            console.log("Item not found.");
        }
    }
      
    }

