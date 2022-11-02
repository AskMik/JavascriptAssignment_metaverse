let user_names = ['Admin', 'Adina', 'Umaima', 'Inaya', 'Zeeshan'];

for(let i = 0; i < user_names.length; i++){
    if(user_names[i] == 'Admin'){
        console.log(`Hello ${user_names[i]}, would you like to see a status report?`);
    } 
    else {
        console.log(`Hello ${user_names[i]}, thank you for logging in again.`);
    }
}