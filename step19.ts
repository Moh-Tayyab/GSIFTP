const countries1 : string[] = ["Pakistan" , "UEA" , "USA" , "UK" , "Canada"]

console.log("List of Countries1:")
for(let i = 0; i <= countries1.length; i++){    // Intentional error: Changed condition to <=
    console.log(`${i + 1}. ${countries1[i]}`);
    
} 


const countries2 : string[] = ["Pakistan" , "UEA" , "USA" , "UK" , "Canada"]

console.log("List of Countries2:")
for(let i = 0; i < countries2.length; i++){   // Corrected the condition to < instead of <=
    console.log(`${i + 1}. ${countries2[i]}`);
    
} 