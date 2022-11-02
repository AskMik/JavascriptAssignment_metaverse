let friendsName = ["friend1", "friend2", "friend3"];


let eachFriend;

for(let i = 0; i < friendsName.length; i++){
    eachFriend = friendsName[i];
    document.write(`<br>Greetings ${eachFriend}! Hope you are having a good day. I would like to invite you for dinner.`);
}