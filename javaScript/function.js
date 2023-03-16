


// java procedures 

function greet(message){
    console.log(` message: ${message}`);
}

greet("hello world");
greet("bye")



function sum(Pa,Pb){
let result =Pa+Pb;
 return result;
}

let AGRa = 5, AGRb = 7;

let result=sum(AGRa,AGRb);
console.log(result);

function changeValues(parameter){
parameter= 20;
}

let argument = 10;

console.log(`argument value before the function call ${argument}`);
changeValues(argument);
console.log(`after function call ${argument}`)


function changeValues1(parameter){
    parameter [0]= 20;
    }
    
    let argument1 = [10];
    
    console.log(`argument value before the function call ${argument1}`);
    changeValues1(argument1);
    console.log(`after function call ${argument1}`);





function a1(p){
p ="bye";
}

let b = "hello";

console.log(typeof b);

console.log(b);
a1(b);
console.log(b);




// function recursive

function functionRecursive(number){
    
    if(number==1){
        console.log(number);
    }
    else{
        functionRecursive(number-1);
        console.log(number);
    }
}


functionRecursive(5);

