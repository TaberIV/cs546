

// Exports
function deepEquality(obj1, obj2) {
	// Check args are both objects
	if (arguments.length != 2 || typeof obj1 !== 'object' || typeof obj2 !== 'object')
		throw 'deepEquality takes exactly two arguments that are both Objects.'
	
	// Gets Keys of objects
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	
	// Checks that number of keys match
	if (keys1.length != keys2.length)
		return false;

	// Checks that all keys match
	for (var i = 0; i < keys1.length; i++) {
		
		for (var j = 0; j < keys1.length; j++) {
			if (keys1[i] === keys2[j]) {
				break;
			}
		}

		if (j == keys1.length)
			return false;
	}

	// Checks that all values match
	var value1;
	var value2;
	for (var i = 0; i < keys1.length; i++) {
		value1 = obj1[keys1[i]];
		value2 = obj2[keys1[i]];

		if (typeof value1 !== typeof value2)
			return false;
		else {
			switch (typeof value1) {
				case 'object':
					if (!deepEquality(value1, value2))
						return false;
					break;
				default:
					if (value1 !== value2)
						return false;
			}
		}
	}

	return true;
}

function uniqueElements (arr) {
	// Check argument is an Array
	if (arguments.length != 1 || arr.constructor !== Array)
		throw 'deepEquality takes exactly one arguments that is an Array.'

	// Iterates through arr and adds only
	// unique elements to separate Array
	var uniques = Array();
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < uniques.length; j++) {
			if (arr[i] === uniques[j])
				break;
		}

		// If no match found, add to list of uniques
		if (j == uniques.length)
			uniques.push(arr[i]);
	}

	return uniques.length;
}

function countOfEachCharacterInString (str) {
	// Check argument is a String
	if (arguments.length != 1 || typeof str !== 'string')
		throw 'deepEquality takes exactly one arguments that is a String.'
	
	// Itterates through string and creates or
	// increments counter on keys as it sees characters
	var charMap = Object();

	for (var i = 0; i < str.length; i++) {
		if (str[i] in charMap)
			charMap[str[i]]++;
		else
			charMap[str[i]] = 1;
	}

	return charMap
}

module.exports = {
	deepEquality,
	uniqueElements,
	countOfEachCharacterInString
};