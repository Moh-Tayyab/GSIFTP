function car_func(brand:string , model : string , year:number) {
    let car : {brand:string , model:string , year:number} = { 
        brand:brand,
        model:model,
        year:year
    }
       return car
}

const my_car = car_func("Honda" , "Civic" , 2024);

console.log(my_car);
