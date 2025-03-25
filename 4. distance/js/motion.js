/*
	Name exercise: Motion Simulation
	Description: Calculate how much distance an object travels
	autor: unArvol
	date: march 24th 2025
*/

let mass= prompt("enter a mass");
let appliedForce= prompt("enter a appliedForce");
let seconds=1;
let totalDistance=0;
let time=1;
let velocity=0;
let acceleration;

while(appliedForce!=0){
	acceleration= appliedForce/mass;
		velocity= velocity+(acceleration*time);
			seconds= seconds*(seconds +1);
				totalDistance= velocity*time;
					mass= prompt("enter a mass");
						appliedForce= prompt("enter a appliedForce");
}
console.log("the acceleration is :"+acceleration);
console.log("the velocity is :"+velocity);
console.log("the seconds are: "+seconds);
console.log("the total distance is :"+totalDistance);