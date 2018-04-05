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

function formSubmit() {
	var phrase = document.getElementById('phrase').value;
	
	var isPalindrome;
	if (phrase) {
		isPalindrome = checkPalindrome(phrase);
		alert(isPalindrome ? `${phrase} is a palindrome` : `${phrase} is not a palindrome`);
	}
	else
		alert("You must enter text.")

	return false;
}