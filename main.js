//ex1

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//ex2

let a =  2
while (a <= 20) {
    if (a % 2 !== 0) {
        a++
        continue
    }
    console.log(a);
    a++
}

//ex3

const b = 7;
for (let i = 1; i <= 10; i++) {
    const result = b * i;
    console.log(`${b} * ${i} = ${result}`);
}

//ex4

const numbers = [1, 2, 3, 4, 5];
let index = 0;

while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}

//ex5 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
    if (number[i] === 7) {
        break; 
    }
    console.log(number[i]);
}