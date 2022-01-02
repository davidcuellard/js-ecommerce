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

//Class product Paint
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
    another = prompt('¿Deseas comprar otra pintura? \n Escribe si o no')
  }
}

// New Paints
const Paint1 = new Paint("1", "Leonardo da Vinci","Salvator Mundi", "450300000");
const Paint2 = new Paint("2", "Willem de Kooning","Interchange", "300000000");
const Paint3 = new Paint("3", "Pierre-Auguste Renoir","Bal du moulin de la Galette", "78100000");

//Array of Paints
const products = [Paint1, Paint2, Paint3]

//Use of Push in array
products.push(new Paint("4", "Vincent Van Gogh","Retrato del Dr. Gachet", "82500000"))
products.push(new Paint("5", "Andy Warhol","Orange Marilyn", "241000000"))


// Calculate the total of the purchase in Millions
const totalM = () => total / 1000000;

// Calculate the discount of 10% of the purchase
const allProd = () => total - total * 0.1;

// Function to buy or not another Paint
function other(){
  if (another == "no"){
    flagMore = false;
  } else if (another == "si"){
    alert("Nos alegra que quieras seguir comprando");
  } else{
    alert("¡Ha sucedido un error! El dato ingresado no es valido");
    flagMore = false;
  }
}

//Print in console all the products name in default order
productLenght = products.length;

console.log("Todas las pinturas en orden por defecto son: ");
for (let i = 0; i < productLenght ; i++){
  console.log("id: " + products[i].id + "Obra: " + products[i].name + "Valor neto: " + products[i].price);
}

// Cicle of the script
while (flagMore == true){

  entrada = prompt('Escribe el número de la pintura que deseas comprar \n Recuerda que no puedes comprar la pintura dos veces \n 1. Salvator Mundi	$450.3 millones \n 2. Interchange	$300 millones \n 3. Bal du moulin de la Galette \n Pronto encontrarás nuevas pinturas\n \n Recuerda el valor que al valor de la pintura se le sumará el valor del IVA del 19%');
  numero = parseInt(entrada);

  if (numero == 1 || numero == 2 || numero == 3){

    if (numero == 1 && Paint1.sold == false){
      Paint1.sell();
      other();

    }else if (numero == 1 && Paint1.sold == true){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");

    } else if (numero == 2 && Paint2.sold == false){
      Paint2.sell();
      other();

    }else if (numero == 2 && Paint2.sold == true){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");

    } else if (numero == 3 && Paint3.sold == false){
      Paint3.sell();
      other();

    }else if (numero == 3 && Paint3.sold == true){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");
    }

    if (Paint1.sold == true && Paint2.sold == true && Paint3.sold == true) {   
      alert("Felicitaciones, ya has comprado todas las pinturas, tienes un 10% de descuento en el total de los productos");
      flagAll=true;
      flagMore = false;
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

// sort by value highNum to low my function
const productSort = [];
let highNum=1000000000000000;
let temporalNum = 0;
let sortNum;
const productSortName = products;

for (let j = 0; j < productLenght ; j++){
  for (let y = 0; y < productLenght ; y++){
    if (products[y].price > temporalNum && products[y].price < highNum){
      temporalNum =  products[y].price;
      sortNum = y;
    }
  }
  productSort[j] = products[sortNum];
  highNum = temporalNum;
  temporalNum=0;
}

//Print in console all the products by value order with my function

console.log(" ");
console.log("Mi función");
console.log("Todas las pinturas en orden de mayor a menor son: ");
for (let i = 0; i < productLenght ; i++){
  console.log("Obra: " + productSort[i].name + "Valor neto: " + productSort[i].price);
}

//using sort function
productSortName.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

//Print in console all the products by name with Sort

console.log(" ");
console.log("Función Sort");
console.log("Todas las pinturas en orden alfabético son: ");
for (let i = 0; i < productLenght ; i++){
  console.log("Obra: " + productSortName[i].name + "Valor neto: " + productSortName[i].price);
}