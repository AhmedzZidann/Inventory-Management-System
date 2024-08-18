"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.items = [];
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log("Your item is added succefully! ");
        console.log(`Name: ${item.name}` + " " + `Price: ${item.getPrice()}` + " " + `Quantity: ${item.getQty()}`);
    }
    removeItem(itemName) {
        if (this.searchItem(itemName)) {
            this.items = this.items.filter(item => item.name !== itemName);
            console.log(`Item ${itemName} has been successfully deleted.`);
        }
    }
    viewInventory() {
        if (!this.items.length) {
            console.log("Your Inventory is empty!");
        }
        for (const item of this.items) {
            console.log("Name:", item.name, ", Price:", +item.getPrice(), ", Quantity:", item.getQty());
            if (item.isLowStock()) {
                console.log("warning: " + item.name + " is low in stock");
            }
        }
    }
    searchItem(itemName) {
        const result = this.items.find(item => item.name === itemName);
        if (result) {
            return result;
        }
        else {
            console.log("Item not found.");
        }
    }
}
exports.Inventory = Inventory;
