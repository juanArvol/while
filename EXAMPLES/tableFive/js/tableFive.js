/*
	Name exercise: table of five
	Description: Calculate five times table 
	autor: unArvol
	date: march 24th 2025
*/

let counter = 1;
let number = 5;
let product = 1;

while (counter <= number) {
    product = number * counter;
    console.log(number + " X " + counter + " = " + product);
    counter++;
}
