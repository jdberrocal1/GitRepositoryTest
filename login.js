
function login(argument) {
	console.log(argument);
}


function Login(){
    console.log("Está haciendo hambre")
}


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

