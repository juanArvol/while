/*
	Name exercise: Work Machine
	Description: the fifth excercise made with cycle while in js.
	autor: unArvol
	date: march 24th 2025
*/

let distance=prompt("please enter a distance"); 
let appliedForce=prompt("please enter a applied force");
let totalWork= 0;
let counter = 0;
let work;

while(distance>=0){
	work=appliedForce*distance;
		totalWork=totalWork+work;
			distance=prompt("please enter a distance"); 
				counter++;
}
console.log(work);
console.log(totalWork);
console.log(counter);