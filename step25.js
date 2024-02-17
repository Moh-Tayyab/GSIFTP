"use strict";
const age = 30;
if (age < 2) {
    console.log("The person is a Baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 14) {
    console.log("The person is a kid");
}
else if (age >= 14 && age < 20) {
    console.log("The person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is an elder");
}
