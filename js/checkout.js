
// Exercise 7
function validate() {
	const error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");
	
	const form = document.querySelector(".form");



	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById("errorAddress");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone");


	// Validate fields entered by the user: name,last name, address, phone, password, and email
	let message = "";
	// Name validation
	if (fName.value.length < 3) {
		message = "This field is required and must have, at least, 3 characters";
		errorName.innerHTML = message;
		console.log(message);
		// error++;
	}
	// Email validation
	if (fEmail.value.length < 3) {
		// error++;
	}
	// Address validation
	if (fAddress.value.length <3){

	}
	// Last Name validation
	if (fLastN.value.length < 3){
		
	}

	// Password validation
	if (fPassword.value.length <3){
		
	}

	// Phone validation
	if (fPhone.value.length <3){
		
	}


// esta prederminado
	// if (error > 0) {
	// 	alert("Error");
	// } else {
	// 	alert("OK");
	// }

}
