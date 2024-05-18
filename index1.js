//validar formulario 
//crear variable y seleccionar sus ID

//errores de P
const errorName = document.getElementById("errorName");
const errorAsunto = document.getElementById("errorAsunto");
const errorMensaje = document.getElementById("errorMensaje");

//Variable declaradas
let nameInput = document.getElementById("nombre");
let asuntoInput = document.getElementById("asunto");
let mesageInput = document.getElementById("mensaje");
//variable para comentar los datos de la persona
const validarDatos = /^[a-zA-Z .ñÑáéíóúÁÉÍÓÚ]+$/;




//Variable de formulario 
let formInput = document.getElementById("formulario"); 

//creamos el evento llamar a variable de formulario
formInput.addEventListener("submit",function(event) {

 event.preventDefault();

let nombre = nameInput.value;
let asunto = asuntoInput.value;
let mensaje = mesageInput.value;

    registroUser(nombre,asunto,mensaje);
    

});

//Se crearon variable y seleccionar sus 

//Crear una funcion para validar datos del usuario 
function registroUser( nombre, asunto, mensaje){

let nameValidator = validarDatos.test(nombre);
let asuntoValidator = validarDatos.test(asunto);
let mesageValidator = validarDatos.test(mensaje);
clearInputs();
clearErrors();

if(!nameValidator){
    errorName.innerHTML = "Nombre mal escrito";
    // ("Nombre mal escrito");
}
if(!asuntoValidator){
    errorAsunto.innerHTML = "Asunto mal escrito";
    //alert ("Asunto mal escrito");

}if(!mesageValidator){
    errorMensaje.innerHTML = "Mensaje mal escrito";
    //alert ("Mensaje mal escrito");

}if(nameValidator && asuntoValidator && mesageValidator) {

    clearInputs();
    clearErrors();
    //errorName.innerHTML = "Asunto mal escrito");
    alert ("Datos estan bien ingresados");

}
}
function clearErrors() {
    /* Limpiamos los errores de los span*/
    errorName.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
  }
  function clearInputs() {
    /* Limpiamos lo que está escrito en los inputs*/
    nameInput.value = "";
    asuntoInput.value = "";
    mesageInput.value = "";
  }
  












