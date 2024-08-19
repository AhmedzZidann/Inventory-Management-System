"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const Item_1 = require("./classes/Item");
const Inventory_1 = require("./classes/Inventory");
const prompt = promptSync();
const myInventory = new Inventory_1.Inventory();
while (true) {
    console.log("welcome to Kwentra Inventory Management System!.\n");
    console.log("1. Enter a new Item");
    console.log("2. View Inventory");
    console.log("3. Search for an item");
    console.log("4. Update Item Quantity");
    console.log("5. Update Item Price");
    console.log("6. Remove an Item");
    console.log("7. Exit");
    let selectedAction = prompt("Please select Action you need to take:");
    if (!["1", "2", "3", "4", "5", "6", "7"].includes(selectedAction)) {
        console.log("\nInvalid selection. Please choose a valid option!\n");
        continue;
    }
    //#############################################################################
    if (selectedAction == "1") {
        let name = prompt("Please enter Item name: ");
        let price = prompt("Please enter Item price: ");
        let qty = prompt("Please enter Item qty: ");
        const pr = Number(price);
        const qt = Number(qty);
        const newItem = new Item_1.Item(name, pr, qt);
        const errorMessage = newItem.validateItem(pr, qt);
        if (errorMessage) {
            console.log(errorMessage);
        }
        else {
            myInventory.addItem(newItem);
        }
    }
    //#############################################################################
    if (selectedAction == "2") {
        myInventory.viewInventory();
    }
    //#############################################################################
    if (selectedAction == "3") {
        let searchItemName = prompt("Please enter Item name you need to search for: ");
        let result = myInventory.searchItem(searchItemName);
        console.log(result);
    }
    //#############################################################################
    if (selectedAction == "4") {
        let searchItemName = prompt("Please enter the Item name you need to update:");
        let newQty = prompt("Please enter the new quantity: ");
        let qtyToUpdate = Number(newQty);
        myInventory.updateQtyInInventory(searchItemName, qtyToUpdate);
    }
    //#############################################################################
    if (selectedAction == "5") {
        let searchItemName = prompt("Please enter the Item name you need to Update:");
        let result = myInventory.searchItem(searchItemName);
        if (result) {
            console.log(result);
            let newPrice = prompt("Please enter the new price: ");
            let priceToUpdate = Number(newPrice);
            if (priceToUpdate > 0) {
                result.updateItemPrice(priceToUpdate);
                console.log(`Price for ${result.name} updated successfully to ${result.getPrice()}.`);
            }
            else {
                console.log("Invalid price entered.");
            }
        }
    }
    //#############################################################################
    if (selectedAction == "6") {
        let searchItemName = prompt("Please enter the Item name you need to Delete: ");
        myInventory.removeItem(searchItemName);
    }
    //#############################################################################
    if (selectedAction == "7") {
        console.log("Thank you for using Kwentra Inventory Management System. GOOD BYE!");
        break;
    }
    console.log("#############################################################################################################");
}
