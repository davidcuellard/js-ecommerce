"use strict";

$(document).ready(function() {

  const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 

  $("#sendButton").click(() => { 
    const dataBuyer = {Name: $("#name").val() , Address: $("#address").val() , Email: $("#email").val() , Phone: $("#phone").val(), TotalPurchase: sum}
      $.ajax({
          method: "POST",
          url:  APIURL,
          data: dataBuyer,
          success: function(){
              console.log(`Successful purchase to: ${JSON.stringify(dataBuyer)}`);
          }
      });
  });
 

  $(".btnCloseDelete").click(() => { 
    clearCart()
    showTotal()
  });
  

});


function clearCart(){
  const buyedItems = localStorage.getItem('items')
  const buyed = localStorage.getItem('buyed')
  let buyedItemsArray = JSON.parse(buyedItems)
  let buyedArray = JSON.parse(buyed)

  listItems.itemsBuyed = []

  if (!buyedArray) {
    buyedArray = []
  }

  buyedArray = buyedArray.concat(buyedItemsArray)

  localStorage.setItem('buyed', JSON.stringify(buyedArray))

  localStorage.setItem('items', 0)

  sum = 0;
  
  localStorage.setItem('sum', JSON.stringify(sum))

  for(let i = 0; i < buyedItemsArray.length ; i++){
    document.getElementsByClassName(`listLi`)[0].remove();
  }

}