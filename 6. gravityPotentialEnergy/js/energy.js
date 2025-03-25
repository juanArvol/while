/*
	Name exercise: gravity Potential Energy Gravity
	Description: the sixth exercise made with cycle while in js 
	autor: unArvol
	date: march 24th 2025
*/

const gravity = 9.81; 
let mass= prompt("please enter a mass");
let height= prompt("please enter a height"); 
let totalEnergy = 0;
let counter = 0;
let totalSum;

while(height>=0){
	let energy= mass*height*gravity;
		console.log(energy);
			totalSum= totalSum+energy;
				console.log(totalSum);
					height= prompt("please enter a height"); 
						counter++;
							console.log(counter);

}
