"use strict";

$(document).ready(function() {

  //$.ajaxSettings.async = false;
  
  console.log('DOM is ready');

  const urlJSON = "../data/data.json"

  $.getJSON( urlJSON , (res) => {
    localStorage.setItem('productFields', JSON.stringify(res))

    let productFields = JSON.parse(localStorage.getItem('productFields'))

    const products = new Cards(productFields)

    nodoPrincipal.appendChild(products.nodo)

    hideAddButton();
    showTotal();
    animations();
  
  })

  
});

const nodoPrincipal = document.getElementById('products')

function animations(){
  $(".paint").css("border", "double 4px rgb(70, 34, 13)")
             .hide(0)
             .delay(100)
             .fadeIn(3000)
}


