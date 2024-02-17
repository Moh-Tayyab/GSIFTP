const usernames : string[] = ["Sir Zia" , "Sir Qasim" , "Sir Imran" , "Sir Ameen"];


for(let username of usernames ) {
    if(username = "Sir Zia"){
    console.log("Hello Sir Zia, would you like to see status");
    break
}else{
        console.log(`Hello ${username}, thank you for logging in again`);
    
}
}