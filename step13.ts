const originalGuest = ["Asad" , "Arslan" , "Qasim" , "Khalid" , "Hashim"];


for(let i = 0; i < originalGuest.length; i++){

    console.log(`Dear ${originalGuest[i]}, I would like to invit you dinner. `);
    
}

const guestUable = originalGuest[1];
console.log(`${guestUable}regrets that they can't make it to dinner.`)


    
const newGuest: string = "Abdullah"
 originalGuest[1] = newGuest;

 for (let i = 0; i < originalGuest.length; i++){
    console.log(`Dear ${originalGuest[i]}, I would like to invit you dinner.`);
    
 }