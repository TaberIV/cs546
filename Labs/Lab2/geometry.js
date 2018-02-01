// Functions for checking arguments
function isDimension(num) {
	return typeof num !== undefined && !isNaN(num) && num > 0;
}

const checkDimensions = (args, numDimensions) => {
	// Check for correct number of arguments
	if (args.length != numDimensions)
		throw `Expected ${numDimensions} arguments, got ${args.length}.`;
	
	// Checks all arguments are valid dimensions
	for (let i = 0; i < numDimensions; i++) {
		if (!isDimension(args[i]))
			throw `Argument ${i} is not a number greater than 0.`;
	}
}

// Exported functions
function volumeOfRectangularPrism(length, width, height) {
	checkDimensions(arguments, 3);

	return length * width * height;
}

function surfaceAreaOfRectangularPrism (length, width, height) {
	checkDimensions(arguments, 3);

	return 2 * (length * width + length * height + width * height);
}

function volumeOfSphere(radius) {
	checkDimensions(arguments, 1);

	return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

function surfaceAreaOfSphere(radius) {
	checkDimensions(arguments, 1);

	return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

module.exports = {
	volumeOfRectangularPrism,
	surfaceAreaOfRectangularPrism,
	volumeOfSphere
};
