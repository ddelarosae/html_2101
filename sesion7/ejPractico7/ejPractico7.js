function validar_formulario(){
    var username = document.formRegistro.usuario;
    var email = document.formRegistro.correo;
    var password = document.formRegistro.pass;
    var username_len = username.value.length;
    if(username_len<8 || username==0){
        alert("Se solicita ingresar el nombre de usuario");
        usuario.focus();
        //return false;
    }
    formato_correo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email ==0 || !email.value.match(formato_correo)){
        alert("Se solicita ingresar un correo valido");
        email.focus();
    }

}
function ocultarPassword() {
    var elemento=document.getElementById("pass");
    elemento.type="password";
}
function mostrarPassword() {
    var elemento=document.getElementById("pass");
    elemento.type="text";
}