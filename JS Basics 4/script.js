
run();

function run(){
    console.log("Hoisting it means that all the functions are moved up while the program gets executed")
}


//Named Function Assignment
let stand= function walk(){
    console.log("stand");
}

//Anonymous function assignment
let stand2= function(){
    console.log("stand");
}


stand();
//if we call stand before function assignment it won't execute 

let arr=[1,2,3,4];

//callback function inside reduce having two parameter accumulator current value

//0 signifies accumulator is initialised with 0

//if we donot specify 0 accumulator gets the first value of the arrayand currentValue starts with 2nd value

let totalSum=arr.reduce((acculumulator,currentValue)=> acculumulator+currentValue,0);

console.log(totalSum);