

// cycle for...



let maximum = 5;

for(let counter = 0; counter < maximum; counter++){
console.log(`Good morning ${counter+1}`);
}


maximum = 10;
let minimum = -10;


for( let counter = 1;counter <= maximum;counter +=3){
    console.log(counter);
}

for(let counter = 1;counter >= minimum;counter-=3){
console.log(counter);
}

let sum = 0;
maximum = 5;
minimum = 0;

for(let number=1; number <= maximum; number++){
console.log(`${sum} + ${number}`)
    sum += number;
console.log(sum);

}
console.log(`The cumulative sum of the first ${maximum} number is :${sum}`);
