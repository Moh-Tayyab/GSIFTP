"use strict";
const friendsName = ["Zain", "Umair", "Asad", "Usama"];
console.log(friendsName);
let fulName = "Muhammad Tayyab";
function titleCase(fulName) {
    let parts = fulName.toLowerCase().split("");
    for (let i = 0; i < parts.length; i++) {
        parts[i] - parts[i][0].toUpperCase() + parts[i].slice(1);
    }
    console.log(parts.join(" "));
    return parts;
}
titleCase(fulName);
