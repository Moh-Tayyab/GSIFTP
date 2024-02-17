"use strict";
function sandwich(items) {
    console.log("Sandwiches:\n");
    if (items.length === 0) {
        console.log("item not found");
    }
    else {
        console.log("Your order of sandwich is fulfil:");
        for (let item of items) {
            console.log(`${item}`);
        }
    }
    console.log();
}
sandwich(["cheese", "Ham", "Club", "Tomato"]);
sandwich(["Turkey", "Swiss Cheese"]);
sandwich([]);
