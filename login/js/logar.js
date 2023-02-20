function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "teamo" && password == "0112") {
        window.location = "final.html";
        return false;
    }
    else {
        alerta();
        return false;
    }
}

function alerta() {
    swal("NÃO ACREDITO! 😠", "Como você conseguiu errar isso meu amor?")
}
