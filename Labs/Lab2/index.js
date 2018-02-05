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

// Testing surfaceAreaOfSphere
console.log("\nTesting surfaceAreaOfRectangularPrism:");
try {
	console.log(geometry.surfaceAreaOfSphere(1)); 		// 12.566...
	console.log(geometry.surfaceAreaOfSphere(5)); 		// 314.159...
	console.log(geometry.surfaceAreaOfSphere(3));		// 113.0967...
	console.log(geometry.surfaceAreaOfSphere(123));		// 190116.621...
	console.log(geometry.surfaceAreaOfSphere(0));		// Error
}
catch (err) {
	console.log(err);
}

// Testing deepEquality
console.log("\nTesting deepEquality:");
try {
	var obj1 = {
		'a': 0,
		'b': 1,
		'c': 2,
		1: 'a',
		2: 'b',
		3: 'c'
	};

	var obj2 = {
		1: 'a',
		2: 'b',
		3: 'c',
		'a': 0,
		'b': 1,
		'c': 2
	};
	console.log(utilities.deepEquality(obj1, obj2));	// true

	obj2.c = 3;
	console.log(utilities.deepEquality(obj1, obj2));	// false
	obj2.c = 2;
	
	var obj3 = {
		'd': 3,
		'e': 4,
		'f': 5
	};

	var obj4 = {
		'd': 3,
		'e': 4,
		'f': 5
	};

	obj1['obj'] = obj3;
	obj2['obj'] = obj4;
	console.log(utilities.deepEquality(obj1, obj2));	// true

	obj3.d = -3;
	console.log(utilities.deepEquality(obj1, obj2));	// false

	console.log(utilities.deepEquality(obj1, null));		// Error
}
catch (err) {
	console.log(err);
}

// Testing uniqueElements
console.log("\nTesting uniqueElements:");
try {
	var testArr = ["a", "a", "b", "a", "b", "c"];
	console.log(utilities.uniqueElements(testArr));	// 3

	testArr = [1, "1", 1.0, "a"];
	console.log(utilities.uniqueElements(testArr));	// 3

	testArr = ["a", "a", "a", "a", "a", "a", "a"];
	console.log(utilities.uniqueElements(testArr));	// 1

	testArr = [];
	console.log(utilities.uniqueElements(testArr));	// 0

	testArr = {
		0: 'a'
	};
	console.log(utilities.uniqueElements(testArr));	// Error
}
catch (err) {
	console.log(err);
}

// Testing countOfEachCharacterInString
console.log("\nTesting countOfEachCharacterInString:");
try {
	var test = "Hello, the pie is in the oven";
	var charMap = utilities.countOfEachCharacterInString(test);
	console.log(test);
	console.log(charMap);

	test = "My name is Edward Taber McFarlin IV, but I go by Taber.";
	charMap = utilities.countOfEachCharacterInString(test);
	console.log(test);
	console.log(charMap);

	var test = "My mom decided she liked the name Taber.";
	var charMap = utilities.countOfEachCharacterInString(test);
	console.log(test);
	console.log(charMap);

	var test = "It's 5:30AM because my roommate was up doing Systems so I figured I might as well be productive.";
	var charMap = utilities.countOfEachCharacterInString(test);
	console.log(test);
	console.log(charMap);

	var test = {
		"Grade": "A?"
	};
	var charMap = utilities.countOfEachCharacterInString(test);
	console.log(test);
	console.log(charMap);
}
catch (err) {
	console.log(err);
}
