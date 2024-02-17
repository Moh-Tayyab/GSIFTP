"use strict";
const worldVisitPlaces = ["Tokyo", "Machu Picchu", "Santorini", "Grand Canyon", "Great Barrier Reef", "Eiffel Tower"];
//Print your array in its original order.
console.log("Original Array:");
console.log(worldVisitPlaces);
worldVisitPlaces.reverse();
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("In Reverse Order:");
console.log(worldVisitPlaces);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
worldVisitPlaces.reverse();
console.log("\nOriginal order (after double revesal):");
console.log(worldVisitPlaces);
// Sort the array in reverse alphabetical order
worldVisitPlaces.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(worldVisitPlaces);
worldVisitPlaces.sort();
//Print your array in alphabetical order without modifying the actual list.
console.log("In Alphabetical order:");
console.log(worldVisitPlaces);
//Show that your array is still in its original order by printing it again.
console.log("Original order:");
console.log(worldVisitPlaces);
// Sort the array in alphabetical order
worldVisitPlaces.sort();
console.log("\nSorted in alphabetical order:");
console.log(worldVisitPlaces);
// Sort the array in reverse alphabetical order
worldVisitPlaces.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(worldVisitPlaces);
