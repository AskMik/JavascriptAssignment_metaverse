let magiciansName = ['Aatka', 'Adina', 'Umaima', 'Zeeshan'];

function makeGreat(){
    let greatMagicians = [];

    for(let i = 0; i < magiciansName.length; i++){
        greatMagicians.push(`The Great ${magiciansName[i]}`);
    }

    return greatMagicians;
}

function returnMagicians(){
    let greatMagicians = makeGreat();
    console.log(`magicians :  ${magiciansName}`);
    console.log(`The Great Magicians name :  ${greatMagicians}`);

}


returnMagicians();