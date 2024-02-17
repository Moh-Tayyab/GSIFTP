"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    let ordinaLEnding;
    if (number == 1) {
        ordinaLEnding = "st";
    }
    else if (number == 2) {
        ordinaLEnding = "nd";
    }
    else if (number == 3) {
        ordinaLEnding = "rd";
    }
    else {
        ordinaLEnding = "th";
    }
    console.log(`${number}${ordinaLEnding}`);
}
