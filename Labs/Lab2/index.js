const geometry = require("./geometry");
const utilities = require("./utilities");

console.log("Test Start:");

// Testing volumeOfRectangularPrism
console.log("Testing volumeOfRectangularPrism:");
try {
	console.log(geometry.volumeOfRectangularPrism(3, 4, 5)); 		// 60
	console.log(geometry.volumeOfRectangularPrism(5, 3, 4)); 		// 60
	console.log(geometry.volumeOfRectangularPrism(3, 8, 17));		// 408
	console.log(geometry.volumeOfRectangularPrism(2, 3, 18));		// 108
	console.log(geometry.volumeOfRectangularPrism(123, 32, 0));		// Error
}
catch (err) {
	console.log(err);
}

// Testing surfaceAreaOfRectangularPrism
console.log("\nTesting surfaceAreaOfRectangularPrism:");
try {
	console.log(geometry.surfaceAreaOfRectangularPrism(3, 4, 5)); 		// 144
	console.log(geometry.surfaceAreaOfRectangularPrism(5, 3, 4)); 		// 144
	console.log(geometry.surfaceAreaOfRectangularPrism(3, 8, 17));		// 422
	console.log(geometry.surfaceAreaOfRectangularPrism(9, 3, 18));		// 486
	console.log(geometry.surfaceAreaOfRectangularPrism(123, 32, NaN));	// Error
}
catch (err) {
	console.log(err);
}

// Testing volumeOfSphere
console.log("\nTesting surfaceAreaOfRectangularPrism:");
try {
	console.log(geometry.volumeOfSphere(1)); 		// 4.188...
	console.log(geometry.volumeOfSphere(5)); 		// 523.598...
	console.log(geometry.volumeOfSphere(3));		// 113.097...
	console.log(geometry.volumeOfSphere(123));		// 7794781.462...
	console.log(geometry.volumeOfSphere(0));		// Error
}
catch (err) {
	console.log(err);
}