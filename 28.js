let age = 22;

if (age < 2){
    console.log("You're a baby!")
}

// 2 years old but less than 4
else if( age > 2 && age < 4){    
    console.log("You're a toddler!")
}

//4 years old but less than 13
else if (age > 4 && age < 13){
    console.log("You're a kid!")
}

//13 years old but less than 20
else if  (age > 13 && age < 20){
    console.log("You're a teenager!")
}

//20 years old but less than 65
else if  (age > 20 && age < 65){
    console.log("You're an adult!")
}

//age 65 or older
else{
    console.log("You're an elder!")
}