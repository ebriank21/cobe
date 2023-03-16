

// declarations of array

let matrix = [[],[],[]];

// we add values 

matrix[0][0]=22;
matrix[0][1]="hello";
matrix[0][2]='b';
matrix[1][0]=2.5;
matrix[1][1]=true
matrix[1][2] ;
matrix[2][0] ;
// array values 
console.log(`array values ${matrix[0][0]}`);
console.log(`array values ${matrix[0][1]}`);
console.log(`array values ${matrix[0][2]}`);
console.log(`array values ${matrix[1][0]}`);
console.log(`array values ${matrix[1][1]}`);
console.log(`array values ${matrix[1][2]}`);
 console.log(matrix[2][0]);

let matrix1 = [[21,22,23],["hola",'c',true],[]];
// array values 
console.log(`array values ${matrix1[0][0]}`);
console.log(`array values ${matrix1[0][1]}`);
console.log(`array values ${matrix1[0][2]}`);
console.log(`array values ${matrix1[1][0]}`);
console.log(`array values ${matrix1[1][1]}`);
console.log(`array values ${matrix1[1][2]}`);
console.log(matrix1[2][0]);

// iterate the values
console.log(matrix.length)
console.log(matrix[0].length);


for(let ren=0; ren<matrix.length;ren++){
for(let col=0;col<matrix[0].length;col++ ){
console.log(`value [${ren}],[${col}] → ${matrix[ren][col]}`);
}
}