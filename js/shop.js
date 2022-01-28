$(document).ready(function() {
  console.log('DOM is ready');
  hideAddButton();
  showTotal();
});

const nodoPrincipal = document.getElementById('products')

const products = new Cards(productFields)

nodoPrincipal.appendChild(products.nodo)

