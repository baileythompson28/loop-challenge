let input;
let username;
let usernameValid;

do {
	input = window.prompt("Enter your username: \n(6 to 14 characters long; no spaces; and first character is a letter)");
	const userInputed = input === null ? "" : input.trim();
	const validLength = userInputed.length >= 6 && userInputed.length <= 14;
	const noSpaces = !userInputed.includes(" ");
	const startLetter = userInputed.charAt(0).toLowerCase() !== userInputed.charAt(0).toUpperCase();
	let message = "Invalid:";

	if (!validLength) {
		message += " Must be 6 - 14 characters long.";
	}
	if (!noSpaces) {
		message += " Username cannot contain spaces.";
	}
	if (!startLetter) {
		message += " First character must be a letter.";
	}

	usernameValid = validLength && noSpaces && startLetter;

	if (usernameValid) {
		username = userInputed;
	} else {
		window.alert(message);
	}
} while (!usernameValid);

const displayUser = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
document.getElementById("output").textContent = `Accepted username: ${displayUser}`;
