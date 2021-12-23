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
let prodLen;

//Class product paint
class paint {
  constructor(author,name, price) {
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

// New paints
const paint1 = new paint("Leonardo da Vinci","Salvator Mundi", "450300000");
const paint2 = new paint("Willem de Kooning","Interchange", "300000000");
const paint3 = new paint("Pierre-Auguste Renoir","Bal du moulin de la Galette", "78100000");

//Array of paints
const products = [paint1, paint2, paint3]

//Use of Push in array
products.push(new paint("Vincent Van Gogh","Retrato del Dr. Gachet", "82500000"))
products.push(new paint("Andy Warhol","Orange Marilyn", "241000000"))


// Calculate the total of the purchase in Millions
const totalM = () => total / 1000000;

// Calculate the discount of 10% of the purchase
const allProd = () => total - total * 0.1;

// Function to buy or not another paint
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

// Cicle of the script
while (flagMore == true){
  entrada = prompt('Escribe el número de la pintura que deseas comprar \n Recuerda que no puedes comprar la pintura dos veces \n 1. Salvator Mundi	$450.3 millones \n 2. Interchange	$300 millones \n 3. Bal du moulin de la Galette \n Pronto encontrarás nuevas pinturas\n \n Recuerda el valor que al valor de la pintura se le sumará el valor del IVA del 19%');
  numero = parseInt(entrada);

  if (numero == 1 || numero == 2 || numero == 3){

    if (numero == 1 && paint1.sold == false){
      paint1.sell();
      other();

    }else if (numero == 1 && paint1.sold == true){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");

    } else if (numero == 2 && paint2.sold == false){
      paint2.sell();
      other();

    }else if (numero == 2 && paint2.sold == true){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");

    } else if (numero == 3 && paint3.sold == false){
      paint3.sell();
      other();

    }else if (numero == 3 && paint3.sold == true){
      alert("¡Ha sucedido un error! La pintura deseada ya fue adquirida anteriormente, intenta nuevamente");
    }

    if (paint1.sold == true && paint2.sold == true && paint3.sold == true) {   
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

//Print in console all the products name in default order
prodLen = products.length;

console.log("Todas las pinturas en orden por defecto son: ");
for (let i = 0; i < prodLen ; i++){
  console.log("Obra: " + products[i].name + "Valor neto: " + products[i].price);
}


// sort by value high to low my function
const prodSort = [];
let high=1000000000000000;
let tempNum = 0;
let sortNum;
const prodSortName = products;

for (let j = 0; j < prodLen ; j++){
  for (let y = 0; y < prodLen ; y++){
    if (products[y].price > tempNum && products[y].price < high){
      tempNum =  products[y].price;
      sortNum = y;
    }
  }
  prodSort[j] = products[sortNum];
  high = tempNum;
  tempNum=0;
}

//Print in console all the products by value order with my function

console.log(" ");
console.log("Mi función");
console.log("Todas las pinturas en orden de mayor a menor son: ");
for (let i = 0; i < prodLen ; i++){
  console.log("Obra: " + prodSort[i].name + "Valor neto: " + prodSort[i].price);
}



//using sort function
prodSortName.sort(function (a, b) {
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
for (let i = 0; i < prodLen ; i++){
  console.log("Obra: " + prodSortName[i].name + "Valor neto: " + prodSortName[i].price);
}