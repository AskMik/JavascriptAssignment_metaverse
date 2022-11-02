let newFriendsName = ["Tooba" ,"Ilma", "Uroosa", "Hiba", "Ifra", "Nida"];

document.write(`Hey ${newFriendsName} 
<br> I'm feeling very sorry to inform you all that I can only invite 2 people for dinner.
`)

newFriendsName.pop();
document.write(`<br><br>
Hey ${newFriendsName[newFriendsName.length - 1]}! 
I'm very sorry to inform you that we would not be able to enjoy this weekend dinner this time. 
But hopefully we can have a dinner next time.`);


newFriendsName.pop();
document.write(`<br><br>
Hey ${newFriendsName[newFriendsName.length - 1]}! 
I'm very sorry to inform you that we would not be able to enjoy this weekend dinner this time. 
But hopefully we can have a dinner next time.`);

newFriendsName.pop();
document.write(`<br><br>
Hey ${newFriendsName[newFriendsName.length - 1]}! 
I'm very sorry to inform you that we would not be able to enjoy this weekend dinner this time. 
But hopefully we can have a dinner next time.`);

newFriendsName.pop();
document.write(`<br><br>
Hey ${newFriendsName[newFriendsName.length - 1]}! 
I'm very sorry to inform you that we would not be able to enjoy this weekend dinner this time. 
But hopefully we can have a dinner next time.`);

document.write(`<br>${newFriendsName}`);

//emptying the array:
newFriendsName.pop();
newFriendsName.pop();

document.write(`<br>
Empty Array: ${newFriendsName}`);