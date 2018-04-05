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
	
	if (phrase) {
		var isPalindrome = checkPalindrome(phrase);

		// Create list element and add it to attempts
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(phrase));
		li.setAttribute("class", isPalindrome ? "is-palindrome" : "not-palindrome");

		var attempts = document.getElementById("attempts");
		attempts.appendChild(li);
	}
	else
		alert("You must enter text.")

	return false;
}