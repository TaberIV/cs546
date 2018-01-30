const questionOne = function questionOne(arr) {
	var sumOfSquares = 0;
	for (i = 0; i < arr.length; i++) {
		 sumOfSquares += arr[i] * arr[i];
	}
	return sumOfSquares;
}

const questionTwo = function questionTwo(num) { 
    if (num < 1)
    	return 0;
    if (num == 1)
    	return 1;
    else
    	return questionTwo(num - 1) + questionTwo(num - 2);
}

const questionThree = function questionThree(text) {
    var count = 0;
    var letter;
    for (i = 0; i < text.length; i++) {
    	letter = text[i];
    	if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ||
    		letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U') {
    		count += 1;
    	}
    }
    return count;
}

const questionFour = function questionFour(num) {
	if (num < 0)
		return NaN;
    else if (num == 0)
    	return 1;
    else
    	return questionFour(num - 1) * num;
}

module.exports = {
    firstName: "Edward", 
    lastName: "McFarlin", 
    studentId: "10406368",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};