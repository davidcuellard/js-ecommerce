"use strict";

function deleteItem(id) {
  deleteFromArray(id)
  restTotal(id)
  showTotal()
  location.reload()

  $(`.button${id}`).show();
}

function deleteFromArray(toFind){
  const listString = localStorage.getItem('items')
  let listArray = JSON.parse(listString)

  const toDelete = listArray.find( e => e.id == toFind );

  console.log(toDelete);
  
  let index = listArray.indexOf(toDelete);

  console.log(index);

  let listArrayNew = listArray.splice(index, 1)
  localStorage.setItem('items', JSON.stringify(listArray))

}

function restTotal(id){

  const priceInput = document.getElementsByClassName("price");
  let price = priceInput[id].innerHTML;
  price = price.match(/(\d+)/)
  price = parseFloat(price)

  let sumToRest = localStorage.getItem('sum')
  sumToRest = parseFloat(sumToRest)

  sumToRest = sumToRest - price;


  localStorage.setItem('sum', JSON.stringify(sumToRest))

}