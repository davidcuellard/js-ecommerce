"use strict";
let entrada;
let numero;
let another;
let fee = parseFloat(1.19)
let total = 0;
let totalM = 0;
let ref1 = 450000000;
let ref2 = 300000000;
let ref3 = 250000000;
let flagMore = true;
let flagRef1 = true;
let flagRef2 = true;
let flagRef3 = true;
let flagGood = true;
let paint = 0;



while (flagMore == true){
  entrada = prompt('Escribe el número de la pintura que deseas comprar \n Recuerda que no puedes comprar la pintura dos veces \n 1. Salvator Mundi	$450.3 millones \n 2. Interchange	$300 millones \n 3. Los Jugadores de cartas	$250 millones \n \n Recuerda el valor que al valor de la pintura se le sumará el valor del IVA del 19%');
  numero = parseInt(entrada);

  if ((numero == 1) || (numero == 2) || (numero == 3)){

    if ((numero == 1) && (flagRef1 == true)){
      total = total + (ref1 * fee);
      flagRef1 = false;
      paint = ref1 * fee;

      alert("El valor total de su pintura es de: " + paint);
      another = prompt('¿Deseas comprar otra pintura? \n Escribe si o no')

      if (another == "no"){
        flagMore = false;
      } else if (another == "si"){
        alert("Nos alegra que quieras seguir comprando");
      } else{
        alert("¡Ha sucedido un error! El dato ingresado no es valido");
        flagMore = false;
      }
    }else if ((numero == 1) && (flagRef1 == false)){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");

    } else if ((numero == 2) && (flagRef2 == true)){
      total = total + (ref1 * fee);
      flagRef2 = false;
      paint = ref2 * fee;

      alert("El valor total de su pintura es de: " + paint);
      another = prompt('¿Deseas comprar otra pintura? \n Escribe si o no')

      if (another == "no"){
        flagMore = false;
      } else if (another == "si"){
        alert("Nos alegra que quieras seguir comprando");
      } else{
        alert("¡Ha sucedido un error! El dato ingresado no es valido");
        flagMore = false;
      }
    }else if ((numero == 2) && (flagRef2 == false)){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");

    } else if ((numero == 3) && (flagRef3 == true)){
      total = total + (ref1 * fee);
      flagRef3 = false;
      paint = ref3 * fee

      alert("El valor total de su pintura es de: " + paint);
      another = prompt('¿Deseas comprar otra pintura? \n Escribe si o no')

      if (another == "no"){
        flagMore = false;
      } else if (another == "si"){
        alert("Nos alegra que quieras seguir comprando");
      } else{
        alert("¡Ha sucedido un error! El dato ingresado no es valido");
        flagMore = false;
      }
    }else if ((numero == 3) && (flagRef3 == false)){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");
    }

    if ((flagRef1 == false) && (flagRef2 == false) && (flagRef3 == false)) {   
      alert("Felicitaciones, ya has comprado todas las pinturas");
      flagMore = false;
    }
  
  }else{
    flagMore = false;
    flagGood = false;
  }

  totalM = total / 1000000;
}

if (flagGood == true){
  alert("¡Gracias por tu compra! \n El valor total es de: " + totalM + " Millones de dólares");
} else {
  alert("Usted ingresó un dato invalido, por favor refresque la página y vuelva a intentarlo");
}


/* while (flagMore == true) {

  entrada = prompt('Escribe el número de la pintura que deseas comprar \n Recuerda que no puedes comprar la pintura dos veces \n 1. Salvator Mundi	$450.3 millones \n 2. Interchange	$300 millones \n 3. Los Jugadores de cartas	$250 millones \n \n Recuerda el valor que al valor de la pintura se le sumará el valor del IVA del 19%');
  numero = parseInt(entrada);

  if (((numero == 1) && (flagRef1 == true)) || ((numero == 2) && (flagRef2 == true)) || ((numero == 3 && flagRef3 == true))){

     /* if (numero == 1){
      paint = ref1;
      total = total + (ref1 * fee);
      flagRef1 = false;

      another = prompt('¿Deseas comprar otra pintura? \n Escribe si o no')

      if (another == "no"){
        flagMore = false;

      } else if (another == "si"){
        alert("Nos alegra que quieras seguir comprando");
      } else if ((another != "no") && (another != "si")){
        alert("El dato ingresado no es valido");
        break;
      }
    }  */ 

/*     alert("hola")
  
    totalM = total / 1000000
  }else{
    alert("chao")
    flagGood == false;
  }
} */


