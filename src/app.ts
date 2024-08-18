import promptSync = require("prompt-sync");

import { Item } from './classes/Item';
import { Inventory } from './classes/Inventory';

const prompt = promptSync();

const myInventory = new Inventory([]);

while(true){

    console.log("welcome to Kwentra Inventory Management System!.\n")
    console.log("1. Enter a new Item");
    console.log("2. View Inventory");
    console.log("3. Search for an item");
    console.log("4. Update Item Quantity");
    console.log("5. Update Item Price");
    console.log("6. Remove an Item");
    console.log("7. Exit");

    let selectedAction = prompt("\nPlease select Action you need to take:");

    if (!["1", "2", "3", "4", "5", "6", "7"].includes(selectedAction)) {
        console.log("\nInvalid selection. Please choose a valid option!\n");
        continue;}
    
    //#############################################################################

    if (selectedAction=="1"){
    let name = prompt("Please enter Item name: ");
    let price = prompt("Please enter Item price: ");
    let qty = prompt("Please enter Item qty: ");

    const pr = Number(price);
    const qt = Number(qty);
        
        if(pr<0 || isNaN(pr)){
            console.log("Invalid price: price must be a postive number!")
            continue;
        }

        if(qt<0 || !Number.isInteger(qt) || isNaN(qt)){
            console.log("Invalid qty: qty must be a postive integer number!")
            continue;
        }

    const newItem = new Item(name, pr, qt);

    myInventory.addItem(newItem);

    console.log("Your item is added succefully! ");
    console.log(`Name: ${newItem.name}`+ " " +`Price: ${newItem.getPrice()}`+ " " +`Quantity: ${newItem.getQty()}`);
    }

    //#############################################################################

    if (selectedAction=="2"){
        myInventory.viewInventory();
    }

    //#############################################################################


    if (selectedAction=="3"){
        
        let searchItemName= prompt("Please enter Item name you need to search for: ");

        let result = myInventory.searchItem(searchItemName);
        
        console.log(result);
        
    }

    //#############################################################################

    if (selectedAction=="4"){


        let searchItemName = prompt("Please enter the Item name you need to update the quantity for: ");
        
        let result = myInventory.searchItem(searchItemName);
        
        if (result) {
            console.log(result);
            let newQty = prompt("Please enter the new quantity: ");
            let qtyToUpdate = Number(newQty);
            
            if (qtyToUpdate >= 0 || Number.isInteger(qtyToUpdate)) {
                result.updateQty(qtyToUpdate);
                console.log(`Quantity for ${result.name} updated successfully to ${result.getQty()}.`);
            } else {
                console.log("Invalid quantity entered.");
            }
        } else {
            console.log("Item not found.");
        }
    }



    //#############################################################################

    if (selectedAction=="5"){

        let searchItemName = prompt("Please enter the Item name you need to update the price for: ");
        
        let result = myInventory.searchItem(searchItemName);
        
        if (result) {
            console.log(result);
            let newPrice = prompt("Please enter the new price: ");
            let priceToUpdate = Number(newPrice);
            
            if (priceToUpdate > 0){
                result.updateItemPrice(priceToUpdate);
                console.log(`Price for ${result.name} updated successfully to ${result.getPrice()}.`);
            } else {
                console.log("Invalid price entered.");
            }
        } else {
            console.log("Item not found.");
        }
        
    }

    //#############################################################################

    if (selectedAction=="6"){

        let searchItemName = prompt("Please enter the Item name you need to Delete: ");
        
        let result = myInventory.searchItem(searchItemName);

        if (result) {
            myInventory.removeItem(result.name);
            console.log(`Item ${result.name} has been successfully deleted.`);
        } else {
            console.log("Item not found.");
        }
    }

    //#############################################################################

if(selectedAction=="7"){
    console.log("Thank you for using Kwentra Inventory Management System. GOOD BYE!");
    break;

}

console.log("#############################################################################################################")

}
