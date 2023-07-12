// Exercise 7
const form = document.getElementById("form"); //accedemos al formulario a través del id.
const input = document.querySelectorAll("#form input")

//Expresiones regulares para cada una de los inputs.
const validations = {
    fName: /^[a-zA-Z]{3,}$/,//minimo 3 caracteres y solamente se peuden letras.
    fEmail: /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9]{2,10}\.[a-zA-Z]{2,5}$/, //se pueden letras, número _ . - mínimo 3 caracteres. @ y minimo 2 caracteres + . + minimo2 caracteres.
    fAddress: /^[a-zA-Z0-9]{3,}$/, //mínimo 3 caracteres.
    fLastN: /^[a-zA-Z]{3,}$/, //mínimo 3 caracteres y solamente se pueden letras.
    fPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{3,8}$/,//mínimo 1 minúscula, 1 mayúscula y un número. Máximo 8 caracteres.
    fPhone: /^\d{9}$/ //Debe tener 9 dígitos.
}

//required
//marcar que todos son falsos en un principio porque estan incorrectos, através de "itemvalidation() se convertira, en true o false.".
let inputBoolean = {
    fName: false,
    fEmail: false,
    fAddress: false,
    fLastN: false,
    fPassword: false,
    fPhone: false,
}

const formValidation = (e) => { //identificamos en que input se ejecuta el evento (e). 
    switch (e.target.id) {
        case "fName":
            itemValidation(validations.fName, e.target, e.target.id); //se envia los siguientes parámetros.
            break;
        case "fEmail":
            itemValidation(validations.fEmail, e.target, e.target.id);
            break;
        case "fAddress":
            itemValidation(validations.fAddress, e.target, e.target.id);
            break;
        case "fLastN":
            itemValidation(validations.fLastN, e.target, e.target.id);
            break;
        case "fPassword":
            itemValidation(validations.fPassword, e.target, e.target.id);
            break;
        case "fPhone":
            itemValidation(validations.fPhone, e.target, "fPhone");
            break;
    }
}

const itemValidation = (validations, input, id,) => { //le pasamos validation, el input (el valor del input) y la id).
    if (validations.test(input.value)) {
        document.getElementById(`${id}`).classList.remove("is-invalid"); //se quita la classe is-invalid.
        document.getElementById(`${id}`).classList.add("is-valid"); //se añade la clase is-valid.
        // document.querySelector(".invalid-feedback").classList.remove("d-block"); //se usa la classe invalid-feedback para quitar y añadir el texto.
        inputBoolean[id] = true;
    } else {
        document.getElementById(`${id}`).classList.add("is-invalid");
        document.getElementById(`${id}`).classList.remove("is-valid");
        // document.querySelector(".invalid-feedback").classList.add("d-block"); //se añade la clase display block de boostrap.
        inputBoolean[id] = false;
    }
}

input.forEach((input) => {
    input.addEventListener("keyup", formValidation) //cuando se levante la tecla, se ejecutará la función "formValidation" //keyup => es cuando se levanta la tecla.
    input.addEventListener("blur", formValidation); //blur, es que se ejecute si le da click fuera del input.
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); //event para evitar que se envie el formulario antes de tiempo.

    if (inputBoolean.fName && inputBoolean.fEmail && inputBoolean.fAddress && inputBoolean.fLastN && inputBoolean.fPassword && inputBoolean.fPhone) {
        // document.getElementById("invalidMessage").classList.add("invisible") //esconde el mensaje de invalid
        form.reset(); //se resetea todo el formulario en cuanto se envia la información
        //Lo de abajo, es para eliminar la clase is-valid para que desaparezca también en cuanto depararezca toda la información.
        document.querySelectorAll(".is-valid").forEach((input) => { //seleccionamos la classes en All. indicamos que es del input.
            input.classList.remove("is-valid");//y cogemos todas las classlits, dentro de input
        });

        document.getElementById("validMessage").innerHTML = "Your form was submitted successfully!" //aparece si esta todo correcto
        document.getElementById("validMessage").classList.add("text-success"); //letras verdes
        document.getElementById("validMessage").classList.remove("invisible"); ////hacemos que desaparexca la classe invisible para que aparezca el mensaje
        setTimeout(() => { //función flecha para hacer aparecer un mensaje durante un tiemmpo determinado
            document.getElementById("validMessage").classList.add("invisible");//hacemos que se elimine la classse sinvisble para que vuelva a aparecer a los 5 segundos respués del mensaje.
        }, 5000); //después de la coma va el tiempo que durará el mensaje en pantalla.


    } else {
        document.getElementById("invalidMessage").innerHTML = "You have to fill in all the fields of the form "; //aparece si hay algun campo que falta por rellenar
        document.getElementById("invalidMessage").classList.add("text-danger");
        document.getElementById("invalidMessage").classList.remove("invisible");//hacemos que desaparexca la classe invisible para que aparezca el mensaje
        setTimeout(() => {//función flecha para hacer aparecer un mensaje durante un tiemmpo determinado
            document.getElementById("invalidMessage").classList.add("invisible"); //hacemos que se elimine la classse sinvisble para que vuelva a aparecer a los 5 segundos respués del mensaje.
        }, 5000); //después de la coma va el tiempo que durará el mensaje en pantalla.

    }
});