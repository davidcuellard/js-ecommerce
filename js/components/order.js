"use strict";


$("#filters").append('<button id="btnFilter3">Year min-max</button>')
$("#filters").append('<button id="btnFilter4">Year max-min</button>')
$("#filters").append('<button id="btnFilter5">Price min-max</button>')
$("#filters").append('<button id="btnFilter6">Price max-min</button>')


$("#btnFilter3").click(function () { 

  let productFields = JSON.parse(localStorage.getItem('productFields'))

  productFields.sort(function(a,b){
    return new Date(a.year) - new Date(b.year);
  });

  reFillNew(productFields)

});


$("#btnFilter4").click(function () { 

  let productFields = JSON.parse(localStorage.getItem('productFields'))

  console.log(productFields)

  productFields.sort(function(a,b){
    return new Date(b.year) - new Date(a.year);
  });

  reFillNew(productFields)

});

$("#btnFilter5").click(function () { 

  let productFields = JSON.parse(localStorage.getItem('productFields'))

  productFields.sort(function(a,b){
    return new Date(a.price) - new Date(b.price);
  });

  reFillNew(productFields)

});

$("#btnFilter6").click(function () { 
  let productFields = JSON.parse(localStorage.getItem('productFields'))

  productFields.sort(function(a,b){
    return new Date(b.price) - new Date(a.price);
  });

  reFillNew(productFields)

});

function reFillNew(productFields){
  localStorage.setItem('productFieldsOrdered', JSON.stringify(productFields))

  $("#products").replaceWith(`<div id = "products"></div>`);

  showCards('productFieldsOrdered')
  hideAddButton();

}


