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
        this.qty = newQuantity;
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
}
exports.Item = Item;
