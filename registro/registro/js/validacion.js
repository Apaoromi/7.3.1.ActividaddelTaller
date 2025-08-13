function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");

}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}

document.getElementById("regBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    if (nombre === "" || apellido === "" || email === "" || password === "" || password2 === "") {
        showAlertError();
        return;
    } 
    else if (password.length < 6 || password !== password2) {
        showAlertError();
        return;
    }
    else if (!terminos) {
        showAlertError();
        return;
    }

    showAlertSuccess();
});