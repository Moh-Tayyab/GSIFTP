"use strict";
const current_users = ["Aoun", "Awais", "Umair", "Farooq", "Waris"];
const new_users = ["Uzair", "Adil", "Umair", "Waris", "Saim"];
for (let new_username of new_users) {
    let l_new_username = new_username.toLowerCase();
    if (current_users.map(user => user.toLowerCase()).includes(l_new_username)) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
    }
}
