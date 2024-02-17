const usernames1 : string[] = ["Sir Zia" , "Sir Qasim" , "Sir Imran" , "Sir Ameen"];

 if(usernames1.length == 0) {
    console.log("Need to find some users!");
 } 
 else{    
     for(let username of usernames1 ) {
    if(username === "Sir Zia"){
    console.log("Hello Sir Zia, would you like to see status");
    
    }else{
        console.log(`Hello ${username}, thank you for logging in again.`);
     }
}
}