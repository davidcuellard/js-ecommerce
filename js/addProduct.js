"use strict";
let sum = localStorage.getItem('sum')
if (!sum) {
  sum = parseFloat(0)
  localStorage.setItem('sum', JSON.stringify(sum))
}

class Item {
  constructor(id, title, price) {
    this.id = id
    this.title = title
    this.price = parseFloat(price)
  }

  static getHTML(id, title, price) {
    return `
      <form action="javascript:deleteItem(${id})">
        <p>${title}</p>
        <p> Price: ${price}</p>
        <button class="buttonTrash">🗑️</button>
      </form> 
    `;
  }
}

class ListItems {
  constructor() {
    this.itemsBuyed = []
    this.nodolist = document.getElementById("list");
    this.fillList()
  }

  addCard(objectItem) {
    const card = document.createElement("li"); 
    card.setAttribute("id",`li${objectItem.id}`)
    card.innerHTML = Item.getHTML(objectItem.id, objectItem.title, objectItem.price); 
    this.nodolist.appendChild(card); 
    this.itemsBuyed.push(objectItem)
  }

  saveList() {
    localStorage.setItem('items', JSON.stringify(this.itemsBuyed))
  }

  fillList() {
    const listString = localStorage.getItem('items')
    let listArray = JSON.parse(listString)
    if (!listArray) {
      listArray = []
    }
    for (const item of listArray) {
      const objectItem = new Item(item.id,item.title, item.price)
      this.addCard(objectItem)
    }
  }

  sumTotal(objectItem){
    let priceObject = parseFloat(objectItem.price) 
    sum = localStorage.getItem('sum')
    sum = parseFloat(sum)
    sum = sum + priceObject;
    localStorage.setItem('sum', JSON.stringify(sum))
  }

}

const listItems = new ListItems()

function saveCard(id) {
  const titleInput = document.getElementsByClassName("title");
  const priceInput = document.getElementsByClassName("price");

  const title = titleInput[id].innerHTML;
  const price = priceInput[id].innerHTML;

  const item = new Item(id, title, price)
  listItems.addCard(item)
  listItems.saveList()
  listItems.sumTotal(item)
  hideAddButton()
  showTotal()
}

function hideAddButton(){
  const listItemsLocal = localStorage.getItem('items')
  let listArrayLocal = JSON.parse(listItemsLocal)
  
  if (!listArrayLocal) {
    listArrayLocal = []
  }

  for (let i = 0 ; i < productFields.length ; i++){
    for (let j = 0 ; j < listArrayLocal.length ; j++){
      if (productFields[i].id == listArrayLocal[j].id){
        $(`.button${i}`).hide();
      }
    }
  } 
}

function showTotal(){
  $("#totalBuyed").replaceWith(`<h4 id="totalBuyed">  ${sum} </h4>`);
}
