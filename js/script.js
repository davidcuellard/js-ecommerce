"use strict";
let entrada;
let numero;
let another;
let fee = parseFloat(1.19)
let total = parseFloat(0);
let flagMore = true;
let flagGood = true;
let flagAll = false;
let finalPrice = parseFloat(0);
let productLenght;
let totalBuyed=0;

//Class product paint
class Paint {
  constructor(id, author, name, price) {
    this.id = id;
    this.author = author;
    this.name  = name;
    this.price  = parseFloat(price);
    this.sold = false;
  }
  sell() {
    this.price = this.price * 1.19;
    this.sold = true;
    total = total + this.price;
    alert("El valor total de su pintura es de: " + this.price);
  }
}

// New paints
const paint1 = new Paint("1", "Leonardo da Vinci","Salvator Mundi", "450300000");
const paint2 = new Paint("2", "Willem de Kooning","Interchange", "300000000");
const paint3 = new Paint("3", "Pierre-Auguste Renoir","Bal du moulin de la Galette", "78100000");

//Array of paints
const products = [paint1, paint2, paint3]


//Use of Push in array
const paint4 = new Paint("4", "Vincent Van Gogh","Retrato del Dr. Gachet", "82500000");
const paint5 = new Paint("5", "Andy Warhol","Orange Marilyn", "241000000");
products.push(paint4)
products.push(paint5)


// Calculate the total of the purchase in Millions
const totalM = () => total / 1000000;

// Calculate the discount of 10% of the purchase
const allProd = () => total - total * 0.1;

// Function to buy or not another paint
function other(){
  another = prompt('¿Deseas comprar otra pintura? \n Escribe si o no')
  if (another == "no"){
    flagMore = false;
  } else if (another == "si"){
    alert("Nos alegra que quieras seguir comprando");
  } else{
    alert("¡Ha sucedido un error! El dato ingresado no es valido");
    flagMore = false;
  }
}

//All paints buyed
function allPaintsBuyed(){
  if (totalBuyed == productLenght) {   
    alert("Felicitaciones, ya has comprado todas las pinturas, tienes un 10% de descuento en el total de los productos");
    flagAll=true;
    flagMore = false;
  }
}

//Print in console all the products name in default order
productLenght = products.length;

console.log("Todas las pinturas en orden por defecto son: ");
for (let i = 0; i < productLenght ; i++){
  console.log("id: " + products[i].id + "  Obra: " + products[i].name + "  Valor neto: " + products[i].price);
}

// Cicle of the script
while (flagMore == true){

  entrada = prompt('Escribe el número de la pintura que deseas comprar \n Recuerda que no puedes comprar la pintura dos veces \n Las pinturas las puedes ver en consola\n \n Recuerda el valor que al valor de la pintura se le sumará el valor del IVA del 19%');
  numero = parseInt(entrada);

  if (numero <= productLenght){

    if (numero == products[numero-1].id && products[numero-1].sold == false){
      products[numero-1].sell();
      totalBuyed++;
      allPaintsBuyed();
      if(flagAll == false){
        other();
      }

    }else if (numero == products[numero-1].id && products[numero-1].sold == true){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");
    }
  
  }else{
    flagMore = false;
    flagGood = false;
  }

}

// Function to discount 10% if the user buyed all products
if (flagAll == true){
  finalPrice = allProd();
  finalPrice = totalM();
} else{
  finalPrice = totalM();
}

// Shows the final price or error if any input was invalide
if (flagGood == true){
  alert("El valor total de su compra es de: " + finalPrice + " Millones de dólares");    
} else {
  alert("Usted ingresó un dato invalido, por favor refresque la página y vuelva a intentarlo");
}

