"use strict";

$(document).ready(function() {

  //$.ajaxSettings.async = false;
  
  console.log('DOM is ready');

  const urlJSON = "../data/data.json"

  $.getJSON( urlJSON , (res) => {
    localStorage.setItem('productFields', JSON.stringify(res))

    showCards('productFields')
    hideAddButton();
    showTotal();
    animations();
  
  })

});


function animations(){
  $(".paint").css("border", "double 4px rgb(70, 34, 13)")
             .hide(0)
             .delay(100)
             .fadeIn(3000)
}

function showCards(key){
  const nodoPrincipal = document.getElementById('products')

  let productFields = JSON.parse(localStorage.getItem(key))

  const products = new Cards(productFields)

  nodoPrincipal.appendChild(products.nodo)
}

function hideAddButton(){
  const listItemsLocal = localStorage.getItem('items')
  let listArrayLocal = JSON.parse(listItemsLocal)
  let productFieldstoHide = JSON.parse(localStorage.getItem('productFields'))
  
  if (!listArrayLocal) {
    listArrayLocal = []
  }

  for (let i = 0 ; i < productFieldstoHide.length ; i++){
    for (let j = 0 ; j < listArrayLocal.length ; j++){
      if (productFieldstoHide[i].id == listArrayLocal[j].id){
        $(`.button${i}`).hide();
      }
    }
  } 

  const listBuyedLocal = localStorage.getItem('buyed')
  let listArrayBuyed = JSON.parse(listBuyedLocal)
  
  if (!listArrayBuyed) {
    listArrayBuyed = []
  }

  for (let i = 0 ; i < productFieldstoHide.length ; i++){
    for (let j = 0 ; j < listArrayBuyed.length ; j++){
      if (productFieldstoHide[i].id == listArrayBuyed[j].id){
        $(`.button${i}`).hide();
      }
    }
  } 
}