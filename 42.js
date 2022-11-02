let magiciansName = ['Aatka', 'Adina', 'Umaima', 'Zeeshan'];

function modify_magiciansName() {

    for(let i = 0; i< magiciansName; i++){
        magiciansName[i] = `The great ${magiciansName[i]}`;
    }

}

function printMagiciansName(){
     console.log('magicians name:', magiciansName);
}

modify_magiciansName();
printMagiciansName();