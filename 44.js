let  orderNumber = 0;

function makeSandwich(order = []){

    console.log(`An Order for order number "${orderNumber + 1}" has been placed of sandwich with "${order}".`);
    orderNumber++;
}

makeSandwich(['Mashed potato', 'Ketchup']);
makeSandwich(['chicken', 'cheddar cheese', 'mozzarella cheese']);
makeSandwich(['chicken', 'capsicum', 'cheddar cheese', 'mozzarella cheese']);