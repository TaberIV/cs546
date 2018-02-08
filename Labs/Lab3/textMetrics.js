function removeCharAt(text, index) {
	try {
		return replaceCharAt(text, '', index);
	}
	catch (error) {
		throw error;
	}
}

function replaceCharAt(text, str, index) {
	try {
		if (!text || typeof text !== 'string')
			throw "You must provide text to change";
		if (typeof text !== 'string')
			throw "Must replace character with some string";
		if (index < 0 || index >= text.length)
			throw "index is outside bounds of string";
	} catch (error) {
		console.trace();
		throw error;
	}
	return text.substring(0, index) + str + text.substring(index + 1, text.length);
};

function simplify(text) {
	if (typeof text !== 'string')
		throw "You must provide a string to simplify";

	for (var i = 0; i < text.length; i++) {
		var char = text[i];

		if (char === ' ' || char === '\n' || char === '\t') {
			if (i == 0 || i == text.length - 1 || text[i - 1] == ' ') {
				text = removeCharAt(text, i);
				i--;
			} else if (char !== ' ') {
				text = replaceCharAt(text, ' ', i);
			}
		}
		else if (char >= 'A' && char <= 'Z') {
			char = String.fromCharCode(char.charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
			text = replaceCharAt(text, char, i);
		}
		else if (!(char >= 'a' && char <= 'z')) {
			text = removeCharAt(text, i);
			i--;
		}
	}

	return text;
}

function addWord (metrics, word) {
	if (word) { 
		metrics.totalWords++;

		if (word in metrics.wordOccurences)
			metrics.wordOccurences[word]++;
		else {
			metrics.wordOccurences[word] = 1;
			metrics.uniqueWords++;
		}

		if (word.length >= 6)
			metrics.longWords++;
	}

	return metrics;
}

function createMetrics(text) {
	if (typeof text !== 'string')
		throw "You must provide a string to create metrics";

	text = simplify(text);
	
	var metrics = {
		"totalLetters": 0,
		"totalWords": 0,
		"uniqueWords": 0,
		"longWords": 0,
		"averageWordLength": 0,
		"wordOccurences": {}
	};
	var word = "";

	for (var i = 0; i < text.length; i++) {
		const char = text[i];

		if (char != ' ') {
			metrics.totalLetters++;
			word += char;
		}
		else {
			metrics = addWord(metrics, word);
			word = "";
		}
	}

	metrics = addWord(metrics, word);
	return metrics;
}

module.exports = {
	simplify,
	createMetrics
};