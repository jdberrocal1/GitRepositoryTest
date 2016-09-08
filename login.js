<<<<<<< HEAD
function login(argument) {
	console.log(argument);
}
=======

function validacionLogin() {
    var un = document.loginform.usr.value;
    var pw = document.loginform.pword.value;
    var nombreUsuario = "nombreUsuario"; 
    var contrasena = "contrasena";
    if ((un == nombreUsuario) && (pw == contrasena)) {
        window.location = "main.html";
        return false;
    }
    else {
        alert ("Mae mamo, gg");
    }
  }
>>>>>>> caa0c514f9143855d7da72bcfe5f872c3c1439dc
