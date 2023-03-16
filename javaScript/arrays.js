


// arrays 

let arraynumber = [];

// modify array elements
arraynumber[0]=21;
arraynumber[1]=5.4;
arraynumber[2]="hello";
arraynumber[3]='c';
arraynumber[4]=true;

// we access the value of the arrays
console.log(`array value one  (${arraynumber[0]})`);
console.log(`array value tow (${arraynumber[1]})`);
console.log(`array value three (${arraynumber[2]})`);
console.log(`array value four (${arraynumber[3]})`);
console.log(`arra value five (${arraynumber[4]})`);
console.log(`array value six (${arraynumber[5]})`);


let arraynumber1 = [22,"hello world",'a',false,4.8,];
// we access the values of the arrays 
console.log(`array value one  (${arraynumber1[0]})`);
console.log(`array value tow (${arraynumber1[1]})`);
console.log(`array value three (${arraynumber1[2]})`);
console.log(`array value four (${arraynumber1[3]})`);
console.log(`arra value five (${arraynumber1[4]})`);
console.log(`array value six (${arraynumber1[5]})`);

let arraynumber2 = [13];
// we access the values of the arrays
console.log(`array value one (${arraynumber2[0]})`);

let arraynumber3 = new Array(6);
// we access the value of the arrays
console.log(`array value one  (${arraynumber3[0]})`);
console.log(`array value tow (${arraynumber3[1]})`);
console.log(`array value three (${arraynumber3[2]})`);
console.log(`array value four (${arraynumber3[3]})`);
console.log(`arra value five (${arraynumber3[4]})`);
console.log(`array value six (${arraynumber3[5]})`);

let arraynumber4 = new Array(23,"world",5.5,'b',false,);
// we access the value of the arrays
console.log(`array value one  (${arraynumber4[0]})`);
console.log(`array value tow (${arraynumber4[1]})`);
console.log(`array value three (${arraynumber4[2]})`);
console.log(`array value four (${arraynumber4[3]})`);
console.log(`arra value five (${!arraynumber4[4]})`);
console.log(`array value six (${arraynumber4[5]})`);





for(let i=0; i<arraynumber.length;i++){
console.log(`arrays value ${i+1} → ${arraynumber[i]}`);
}