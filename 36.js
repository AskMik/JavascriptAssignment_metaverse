function make_shirt(your_name, size){
    console.log(`Your shirt with ${your_name} & ${size} size has been added in our orders list.`)
}

let your_name = prompt('your_name');
let size = Number(prompt('size'));

make_shirt(your_name, size);