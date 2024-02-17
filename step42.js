"use strict";
function car_func(brand, model, year) {
    let car = {
        brand: brand,
        model: model,
        year: year
    };
    return car;
}
const my_car = car_func("Honda", "Civic", 2024);
console.log(my_car);
