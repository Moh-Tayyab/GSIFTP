"use strict";
const originalGuestList = ["Asad", "Arslan", "Qasim", "Khalid", "Hashim"];
for (let i = 0; i < originalGuestList.length; i++) {
    console.log(`Dear ${originalGuestList[i]}, I would like to invit you dinner. `);
}
console.log("Great New , I found a bigger dinner table!");
const newGuestBegging = "Zayan Ali";
originalGuestList.unshift(newGuestBegging);
const newGuestMiddle = "Fahad Khan";
const middleIndex = Math.floor(originalGuestList.length / 2);
originalGuestList.splice(middleIndex, 0, newGuestMiddle);
const newGuestEnd = "Hammad ul Hassan";
originalGuestList.push(newGuestEnd);
for (let i = 0; i < originalGuestList.length; i++) {
    console.log(`Dear ${originalGuestList[i]}, I would like to invit you dinner. `);
}
