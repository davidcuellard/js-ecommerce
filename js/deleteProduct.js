"use strict";

function deleteItem(id) {
  deleteFromArray(id)
  restTotal(id)
  showTotal()
  location.reload()

  $(`.button${id}`).show();
}

function deleteFromArray(toFind){
  // Get items
  const listString = localStorage.getItem('items')
  let listArray = JSON.parse(listString)

  //find id to delete
  const toDelete = listArray.find( e => e.id == toFind );
  let index = listArray.indexOf(toDelete);
  
  //Delete item by id
  let listArrayNew = listArray.splice(index, 1)
  
  //Save new Item array in localStorage
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
  sum = sumToRest;

  localStorage.setItem('sum', JSON.stringify(sum))

}