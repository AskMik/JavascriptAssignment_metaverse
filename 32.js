let user_names = ['Admin', 'Adina', 'Umaima', 'Inaya', 'Zeeshan'];
let new_users = ['Ilma', 'Adina', 'Kiran', 'UMaima', 'Sahiba'];

function addUsers(){
for (let i = 0; i < new_users.length; i++){
   // if the new user is not in the list or id the title case name matches
   if((user_names.includes(new_users[i])) == false && toTitleCase(new_users[i]) == new_users[i]){
      console.log(`${new_users[i]} is available.`);
   } else{
      console.log(`${new_users[i]}! you have to enter a different name.`);
   }
}
}


function toTitleCase(stringName){ 
   let stringToLower = stringName.toLowerCase();
   let nameInTitleCase = stringToLower.split(' ');
   for (var i = 0; i < nameInTitleCase.length; i++) {
   // Every word of first letter will be upper case and other will be concatenate.
   nameInTitleCase[i] = nameInTitleCase[i].charAt(0).toUpperCase() + nameInTitleCase[i].slice(1);

   return nameInTitleCase;
}
}

addUsers();