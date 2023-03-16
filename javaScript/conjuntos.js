


// length

let string = "hello world";
console.log(string.length);

for(let i=0;i<string.length;i++){
console.log(string[i]);

}


let string1 = "good morning";
console.log(string1);

let string2 = string1.substring(0,4);
console.log(`(${string1.substring(0,4)}) character value ${string2.length}`);


let subString = string.substring(0,6);
console.log(subString);
let subString1= string.substring(6,12);
console.log(subString1);
let subString2 = string.substring(6);
console.log(subString2);


// concatenate..

let str1="good";
let str2="morning";
let strcat = str1 + " " + str2;
console.log(strcat);

console.log(`${str1} ${str2}`);


// convert to integer..


let a ="20", b = "10";
console.log(`${parseInt(a)+parseInt(b)}`);
console.log(`${parseFloat(a)+parseFloat(b)}`);


// convert string

a =20;
b =10;
console.log(`${a.toString() + b.toString()}`);



// random number...

// float
console.log(Math.floor(Math.random()*5+1));                       


// integer
console.log(Math.floor(Math.random()*101)+50);    
console.log(Math.trunc(Math.random()*11   ));
console.log(Math.round(Math.random()*10     )) 
console.log(Math.floor(Math.random()*(201-100+1)+100    )   ); 
// console.log(Math.Floor(Math.random()*))

// absolute value;


number3 = 9.1;

let number4 = -10;
console.log(Math.abs(number4))
console.log(Math.abs(number3))
// roundin

var number3 = 9.1;

console.log(Math.round(number3));

// truncated
console.log(Math.trunc(number3));

// round to the nearest maximum number
console.log(Math.ceil(number3));

// round to the nearest minimum number
console.log(Math.floor(number3));

