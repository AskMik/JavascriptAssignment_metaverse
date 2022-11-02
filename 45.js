let cars;

function car(manufacturer, modelName, ...otherProperties){
    let carObject = {
        'manufacturer' : manufacturer,
        'modelName' : modelName,
        'otherProperties' : otherProperties
    }

    console.log(carObject);
}

car('honda', 'civic', {'color' : 'White'});
car('BMW', 'X5', {'color' : 'Black', 'year' : '2006'});
car('Toyota', 'Corolla', {'color' : 'white', 'year' : '2019'});