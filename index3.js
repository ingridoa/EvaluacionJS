//Variables con los datos que ingrese el usuario

const date1 = document.getElementById("valor1"); //console.log(date1);
const date2 = document.getElementById("valor2");
const buttonSum = document.getElementById("btn-sumar");
const buttonRest = document.getElementById("btn-restar");

//Variable para validar los datos que entregue el usuario.

const validatorDate = /^\d+(.\d+)?$/;
const resultDate = document.getElementById("resultado");

// funcion de sumar

function sumar(x, y) {
  let operadorSum = x + y;
  resultDate.innerHTML = operadorSum; // innerhtml entra en el elemento, genera cambio dentro de un parrafo, h1, etc.
}
function resta(x, y) {
  let operadorRes = x - y;
  resultDate.innerHTML = operadorRes;
}
//VALIDACION DEL TEST PERMITE VALIDAR Y COMPROBAR SI EXITE UN PATRON ESPECIFICO DE UNA EXPRESION REGULAR(REGEX).

function validator(x, y) {
  let validatorInput1 = validatorDate.test(x);
  let validatorInput2 = validatorDate.test(y);

  if (!validatorInput1 || !validatorInput2) {
    alert("DATOS INVALIDOS...");
    console.log("DATOS INVALIDOS...");
    return false;
  }
  return true;
}
buttonSum.addEventListener("click", function () {
  let dato1 = parseFloat(date1.value);
  let dato2 = parseFloat(date2.value);

  if (validator(dato1, dato2)) {
    sumar(dato1, dato2);
  }
});

buttonRest.addEventListener("click", function () {
  let dato1 = parseFloat(date1.value);
  let dato2 = parseFloat(date2.value);

  if (validator(dato1, dato2)) {
    resta(dato1, dato2);
  }
});
