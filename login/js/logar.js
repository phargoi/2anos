function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "duda" && password == "0112") {
        window.location = "final.html";
        return false;
    }
    else {
        alerta();
        return false;
    }
}

function alerta() {
    swal("TE PEGUEI! 🤭", "A senha real é a data do nosso namoro.")
}
