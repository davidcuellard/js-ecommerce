"use strict";

function deleteItem(idToDelete) {
  $(`.button${idToDelete}`).show();
  deleteFromArray(idToDelete)
  restTotal(idToDelete)
  showTotal()
  deleteLi(idToDelete)

  listItems.delItemsBuyedArray(idToDelete)
  
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
  console.log(`Product deleted: ${toDelete.title}`)
  
  //Save new Item array in localStorage
  localStorage.setItem('items', JSON.stringify(listArray))
}

function restTotal(idToDelete){

  const listItemsLocal = localStorage.getItem('productFields')
  let listArrayLocal = JSON.parse(listItemsLocal)

  const itemFind = listArrayLocal.find( e => e.id == idToDelete );
  let index = listArrayLocal.indexOf(itemFind);

  let name = listArrayLocal[index].name;
  let price = listArrayLocal[index].price;


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

