import { Item } from './Item';

  export class Inventory{

    private items:Item[] = [];

    constructor (items:Item[]){
        this.items = [];
    }

    public addItem(item:Item){
        this.items.push(item);
    }

    public removeItem(itemName:string):void{
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === itemName) {
              this.items.splice(i, 1);
              break; 
            }
          }
    }

    public viewInventory(){

      if (this.items.length<1){
        console.log("Your Inventory is empty!")
      }
        for (let i = 0; i < this.items.length; i++) {
          const item = this.items[i];
          console.log("Name:", item.name, ", Price:", + item.getPrice(), ", Quantity:", item.getQty());
          if(item.isLowStock()){
            console.log("warning: "+ item.name + " is low in stock")
          }
        }
      }

      public searchItem(itemName: string): Item | undefined {
        for (let i = 0; i < this.items.length; i++) {
          const item = this.items[i];
          if (item.name === itemName) {
            return item;
          }
        }
        return undefined;
      }

    }

