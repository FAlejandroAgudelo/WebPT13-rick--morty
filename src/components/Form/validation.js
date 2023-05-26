const validation = (inputs) => {
    
    const regexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regexPass = new RegExp("[0-9]");
    const errors = {};

    if(!regexEmail.test(inputs.username)){
        errors.username = "Este campo necesita un imail valido!";
    }

    if(!inputs.username){
        errors.username = "El nombre es obligatorio"
    }
    if(!inputs.username.length > 35){
        errors.username = "El nombre debe tener menos de 35 caracteres"
    }
    if(!regexPass.test(inputs.password)){
        errors.password = "Nesecitas al menos un numero!";
    }
    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = "entre 6 y 10 caracteres!";
    }
    return errors;
}

export default validation;