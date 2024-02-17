"use strict";
let magicians_2 = ["Main Afzal", "M.Yaseen", "Ejaz Mugal", "Shamsher Razzaq"];
function show_mag() {
    console.log("List of Magicians:");
    for (let magician of magicians_2) {
        console.log(magician);
    }
}
function great_mag() {
    for (let i = 0; i < magicians_2.length; i++) {
        console.log(`the Great ${magicians_2[i]}`);
    }
}
show_mag();
great_mag();
