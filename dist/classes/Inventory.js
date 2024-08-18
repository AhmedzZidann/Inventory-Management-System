"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor(items) {
        this.items = [];
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(itemName) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === itemName) {
                this.items.splice(i, 1);
                break;
            }
        }
    }
    viewInventory() {
        if (this.items.length < 1) {
            console.log("Your Inventory is empty!");
        }
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            console.log("Name:", item.name, ", Price:", +item.getPrice(), ", Quantity:", item.getQty());
            if (item.isLowStock()) {
                console.log("warning: " + item.name + " is low in stock");
            }
        }
    }
    searchItem(itemName) {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (item.name === itemName) {
                return item;
            }
        }
        return undefined;
    }
}
exports.Inventory = Inventory;
