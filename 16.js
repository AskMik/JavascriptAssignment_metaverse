let friendsName = ["Ilma", "Hiba", "Ifra"];

let eachFriend;

for(let i = 0; i < friendsName.length; i++){
    eachFriend = friendsName[i];
    document.write(`<br>Greetings ${eachFriend}! Hope you are having a good day. I would like to invite you for dinner.`);
}

document.write(`<br><br><br>This is to inform you all that now the party is bigger. `);

let newFriendsName = ["Tooba" ,"Ilma", "Uroosa", "Hiba", "Ifra"];

//append doesn't work here, so the "push" method is used.
newFriendsName.push("Nida");


for(let i = 0; i < newFriendsName.length; i++){
    eachFriend = newFriendsName[i];
    document.write(`<br>Greetings ${eachFriend}! Hope you are having a good day. I would like to invite you for dinner.`);
}
