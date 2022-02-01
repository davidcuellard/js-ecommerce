"use strict";

function deleteItem(idToDelete) {
  $(`.button${idToDelete}`).show();
  deleteFromArray(idToDelete)
  restTotal(idToDelete)
  showTotal()
  deleteLi(idToDelete)
  //location.reload()
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

function restTotal(idToDelete){

  const priceInput = document.getElementsByClassName("price");
  let price = priceInput[idToDelete].innerHTML;
  price = price.match(/(\d+)/)
  price = parseFloat(price)

  let sumToRest = localStorage.getItem('sum')
  sumToRest = parseFloat(sumToRest)
  sumToRest = sumToRest - price;
  sum = sumToRest;

  localStorage.setItem('sum', JSON.stringify(sum))

}

function deleteLi(idToDelete){
  document.getElementById(`li${idToDelete}`).remove();
  
}

