"use strict";
const alic_color = "green";
if (alic_color == "green") {
    console.log("Congratulations! The player just earn 5 points for shooting the green alien.");
}
else if (alic_color === "yellow") {
    console.log("Congratulations! The player just earned 10 points for shooting the yellow alien.");
}
else if (alic_color === "red") {
    console.log("Congratulations! The player just earned 15 points for shooting the red alien.");
}
else {
    console.log("fail,try again");
}
