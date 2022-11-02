let friendsName = ["Ilma", "Hiba", "Ifra"];

let eachFriend;

for(let i = 0; i < friendsName.length; i++){
    eachFriend = friendsName[i];
    document.write(`<br>Greetings ${eachFriend}! Hope you are having a good day. I would like to invite you for dinner.`);
}

document.write(`<br>Unfortunately! ${friendsName[1]} is not coming.`);

friendsName[1] = "Sahiba";

let newFriends;

for(let i = 0; i < friendsName.length; i++){
    newFriends = friendsName[i];
    document.write(`<br>Greetings ${newFriends}! Hope you are having a good day. I would like to invite you for dinner.`);
}
