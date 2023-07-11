// Exercise 7
const form = document.getElementById("form"); //accedemos al formulario a través del id.
const input = document.querySelectorAll("#form input")

//Expresiones regulares para cada una de los inputs.
const validations = {
    nameValidation: /^[a-zA-Z]{3,}$/, //minimo 3 caracteres y solamente se peuden letras.
    emailValidation: /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9]{2,10}\.[a-zA-Z]{2,5}$/, //se pueden letras, número _ . - mínimo 3 caracteres. @ y minimo 2 caracteres + . + minimo2 caracteres.
    addressValidation: /^[a-zA-Z0-9]{3,}$/, //mínimo 3 caracteres.
    lastNameValidation: /^[a-zA-Z]{3,}$/, //mínimo 3 caracteres y solamente se pueden letras.
    passwordValidation: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{3,8}$/,//mínimo 1 minúscula, 1 mayúscula y un número. Máximo 8 caracteres.
    phoneValidation: /^\d{3,9}$/ //de 3 a 9 dígítos. Únicamente se pueden números.
}

const formValidation = (e) => { //identificamos en que input se ejecuta el evento (e). 
    switch (e.target.id) {
        case "fName":
            if (validations.nameValidation.test(fName.value)) {
                document.getElementById("fName").classList.remove("is-invalid"); //se quita la classe is-invalid.
                document.getElementById("fName").classList.add("is-valid"); //se añade la clase is-valid.
                document.getElementById("errorName").classList.remove("d-block");

            } else {
                document.getElementById("fName").classList.add("is-invalid");
                document.getElementById("fName").classList.remove("is-valid");
                document.getElementById("errorName").classList.add("d-block");
            }
            break;
        case "fEmail":

            break;
        case "fAddress":

            break;
        case "fLastN":

            break;
        case "fPassword":

            break;
        case "fPhone":

            break;

    }
}

const itemValidation=()=>{

}

input.forEach((input) => {
    input.addEventListener("keyup", formValidation) //cuando se levante la tecla, se ejecutará la función "formValidation" //keyup => es cuando se levanta la tecla.
    console.log("asdasdsadas");
    input.addEventListener("blur", formValidation); //blur, es que se ejecute si le da click fuera del input.
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); //event para evitar que se envie el formulario antes de tiempo.
});