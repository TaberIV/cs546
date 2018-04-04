function checkPalindrome(text) {
	text = text.replace(/[^\w]/g, '').toLowerCase();
	
	var i = 0;
	var j = text.length - 1;

	while (i < j) {
		if (text[i] != text[j])
			return false;
		i++;
		j--;
	}

	return true;
}

function getPhrase() {
	
}