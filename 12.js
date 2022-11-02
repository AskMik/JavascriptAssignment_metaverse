let friendsName = ["friend1", "friend2", "friend3"];

let eachFriend;

for(let i = 0; i < friendsName.length; i++){
    eachFriend = friendsName[i];
    document.write(`<br> Hey ${eachFriend}! Have a good day.`);
}