"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    getPrice() {
        return this.price;
    }
    getQty() {
        return this.qty;
    }
    updateQty(newQuantity) {
        if (newQuantity < 0 || !Number.isInteger(newQuantity)) {
            console.log("Invalid quantity: Quantity must be a non-negative integer.");
        }
        else {
            this.qty = newQuantity;
            console.log(`Quantity for ${this.name} updated successfully to ${this.qty}.`);
        }
    }
    updateItemPrice(newPrice) {
        if (newPrice < 0) {
            console.log("Invalid price: Price must be non-negative.");
        }
        else
            this.price = newPrice;
    }
    isLowStock() {
        if (this.qty < 5) {
            return true;
        }
        else {
            return false;
        }
    }
    validateItem(price, qty) {
        if (price < 0 || isNaN(price)) {
            return "Invalid price: Price must be a non-negative number!";
        }
        if (qty < 0 || !Number.isInteger(qty) || isNaN(qty)) {
            return "Invalid qty: qty must be a positive integer number!";
        }
        return undefined;
    }
}
exports.Item = Item;
