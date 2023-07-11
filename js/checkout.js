
// Exercise 7
const _submit = document.getElementById("btn");

function validate() {
	// event.preventDefault();//Evita el envio de formulario por defecto.
	// Get the input fields

	const _form = document.getElementById("form"); //accedemos al formulario a través de la id.
	const _input = document.querySelectorAll(".form input"); //accedemos a todos los imputs que estan dentro de la id form. Por eso ponemos el ALl.


	const _fName = document.getElementById("fName").value;
	const _fEmail = document.getElementById("fEmail").value;
	const _fAddress = document.getElementById("fAddress").value;
	const _fLastN = document.getElementById("fLastN").value;
	const _fPassword = document.getElementById("fPassword").value;
	const _fPhone = document.getElementById("fPhone").valueAsNumber;

	// Get the error elements
	const _errorName = document.getElementById("errorName");
	const _errorEmail = document.getElementById("errorEmail");
	const _errorAddress = document.getElementById("errorAddress");
	const _errorLastN = document.getElementById("errorLastN");
	const _errorPassword = document.getElementById("errorPassword");
	const _errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name,last name, address, phone, password, and email
	//name validation
	let nameValidation= /^[a-zA-Z]{3,}$/;
	if (nameValidation.test(_fName)) {
		console.log("All fine name");
	} else {
		console.log("This field is required and must have, only letters, and at least 3 characters");
		_errorName.textContent = "This field is required and must have, only letters, and at least 3 characters";
	};

	// Email validatiom
	let emailValidation = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9]{2,10}\.[a-zA-Z]{2,5}$/;
	if (emailValidation.test(_fEmail)) {
		console.log("All fine email");
	} else {
		console.log("This field is required and must contain an '@' and have, at least, 3 characters. Exemple: asd._re@gmail.com");
		_errorEmail.textContent = "This field is required and must contain an '@' and have, at least, 3 characters. Exemple: asd._re@gmail.com";
	};

	// Address validation
	let addressValidation = /^[a-zA-Z]{3,}$/;
	if (addressValidation.test(_fAddress)) {

		console.log("All fine address");
	} else {
		console.log("This field is required and must have, at least, 3 characters");
		_errorAddress.textContent = "This field is required and must have, at least, 3 characters";
	}

	// Last Name validation
	let lastNameValidation = /^[a-zA-Z]{3,}$/;
	if (lastNameValidation.test(_fLastN)) {
		console.log("All fine lastName");
	} else {
		console.log("This field is required and must have, only letters, and at least 3 characters");
		_errorLastN.textContent = "This field is required and must have, only letters, and at least 3 characters";
	};

	// Password validation
	let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{3,8}$/;
	if (passwordValidation.test(_fPassword)) {
		console.log("All fine password");
	} else {
		console.log("This field is required and between 3 to 8 characters, must have lowecase, uppercase and numbers");
		_errorPassword.textContent = "This field is required and between 3 to 8 characters, must have lowecase, uppercase and numbers";
	}

	// Phone validation
	let phoneValidation = /^\d{3,9}$/;
	if (phoneValidation.test(_fPhone)) {
		console.log("All fine phone");
	} else {
		console.log("This field is required and between 3 to 9 characters, must have only numbers.");
		_errorPhone.textContent = "This field is required and between 3 to 9 characters, must have only numbers.";
	}

	//required
	//name 
	if (_fName === "") {
		alert("The name is required");
		return false;
	}
	//email
	if (_fEmail === "") {
		alert("The email is required");
		return false;
	}
	//address
	if (_fAddress === "") {
		alert("The address is required");
		return false;
	}
	//last name
	if (_fLastN === "") {
		alert("The last name is required");
		return false;
	}
	//password
	if (_fPassword === "") {
		alert("The password is required");
		return false;
	}
	if (_fPhone === "") {
		alert("The phone is required");
		return false;
	}

	// //name test
	// if (!nameValidation.test(_fName)) {
	// 	console.log("This field is required and must have, only letters, and at least 3 characters");
	// 	_fName.style.border = "1px solid red";
	// 	return false;
	// }
	// if (!emailValidation.test(_fEmail)) {
	// 	console.log("This field is required and must contain an '@' and have, at least, 3 characters. Exemple: asd._re@gmail.com")
	// 	_fEmail.style.border = "1px solid red";
	// 	return false;
	// }

	// if (!addressValidation.test(_fAddress)) {
	// 	console.log("This field is required and must have, at least, 3 characters");
	// 	_fAddress.style.border = "1px solid red";
	// 	return false;
	// }
	// if (!lastNameValidation.test(_fLastN)) {
	// 	console.log("This field is required and must have, only letters, and at least 3 characters");
	// 	_fLastN.style.border = "1px solid red";
	// 	return false;
	// }
	// if (!passwordValidation.test(_fPassword)) {
	// 	console.log("This field is required and between 3 to 8 characters, must have lowecase, uppercase and numbers");
	// 	// _fPassword.style.border ="1px solid red";
	// 	return false;
	// }
	// if (!phoneValidation.test(_fPhone)) {
	// 	console.log("This field is required and between 3 to 9 characters, must have only numbers.");
	// 	_fPhone.style.border = "1px solid red";
	// 	return false;
	// }
	// return true;


	// esta prederminado
	// if (error > 0) {
	// 	alert("Error");
	// } else {
	// 	alert("OK");
	// }

}
//Events

document.addEventListener("click", (e) => {
	if (e.target === _submit) {
		e.preventDefault();
		console.log("esta funcionando");
	}
});
