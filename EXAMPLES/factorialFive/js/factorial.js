/*
	Name exercise: Factorial of five
	Description: Print the factorial of five
	Autor: unArvol
	Date: March 22th 2025
*/

let number=5;
let counter=0;
let factorial=1;

while(counter<number){
	counter=counter+1;
	factorial=factorial*counter;
}
console.log("The factorial is:"+factorial);