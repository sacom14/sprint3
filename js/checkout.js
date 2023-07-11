
// Exercise 7
function validate() {

	event.preventDefault();//Evita el envio de formulario por defecto.

	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName").value;
	const fEmail = document.getElementById("fEmail").value;
	const fAddress = document.getElementById("fAddress").value;
	const fLastN = document.getElementById("fLastN").value;
	const fPassword = document.getElementById("fPassword").value;
	const fPhone = document.getElementById("fPhone").valueAsNumber;

	const form = document.getElementById("form"); //accedemos al formulario a través de la id.
	const input = document.querySelectorAll(".form input"); //accedemos a todos los imputs que estan dentro de la id form. Por eso ponemos el ALl.



	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById("errorAddress");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone");

	form.addEventListener("submit",validate);

	// Validate fields entered by the user: name,last name, address, phone, password, and email
	//Name validation
	let nameValidation =/^[a-zA-Z]{3,}$/;
	if (nameValidation.test(fName)) {
		console.log("All fine name");
	}else{
		console.log("This field is required and must have, only letters, and at least 3 characters");
		errorName.textContent = "This field is required and must have, only letters, and at least 3 characters";
	};

	// Email validatiom
	let emailValidation = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9]{2,10}\.[a-zA-Z]{2,5}$/;
	if (emailValidation.test(fEmail)) {
		console.log("All fine email");
	} else {
		console.log("This field is required and must contain an '@' and have, at least, 3 characters. Exemple: asd._re@gmail.com");
		errorEmail.textContent = "This field is required and must contain an '@' and have, at least, 3 characters. Exemple: asd._re@gmail.com";
	};

	// Address validation
	let addressValidation = /^[a-zA-Z]{3,}$/;
	if (addressValidation.test(fAddress)) {
		console.log ("All fine address");
	}else{
		console.log("This field is required and must have, at least, 3 characters");
		errorAddress = "This field is required and must have, at least, 3 characters";
	}

	// Last Name validation
	let lastNameValidation =/^[a-zA-Z]{3,}$/;
	if (lastNameValidation.test(fLastN)) {
		console.log("All fine lastName");
	}else{
		console.log("This field is required and must have, only letters, and at least 3 characters");
		errorLastN.textContent = "This field is required and must have, only letters, and at least 3 characters";
	};

	// Password validation
	let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{3,8}$/;
	if (passwordValidation.test(fPassword)) {
		console.log("All fine password");
	}else{
		console.log("This field is required and between 3 to 8 characters, must have lowecase, uppercase and numbers");
		errorPassword.textContent = "This field is required and between 3 to 8 characters, must have lowecase, uppercase and numbers";
	}

	// Phone validation
	let phoneValidation = /^\d{3,9}$/;
	if (phoneValidation.test(fPhone)) {
		console.log("All fine phone");
	}else{
		console.log("This field is required and between 3 to 9 characters, must have only numbers.");
		errorPhone.textContent = "This field is required and between 3 to 9 characters, must have only numbers.";
	}


	// esta prederminado
	// if (error > 0) {
	// 	alert("Error");
	// } else {
	// 	alert("OK");
	// }

}
