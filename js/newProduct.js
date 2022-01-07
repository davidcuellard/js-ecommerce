"use strict";
class Item {
  constructor(title, price) {
    this.title = title
    this.price = price
  }

  static getHTML(title, price) {
    return `
      <p>${title}</p>
      <p>${price}</p>
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
    card.innerHTML = Item.getHTML(objectItem.title, objectItem.price); 
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
      const objectItem = new Item(item.title, item.price)
      this.addCard(objectItem)
    }
  }
}

const listItems = new ListItems()

function saveCard(position) {
  const titleInput = document.getElementsByClassName("title");
  const priceInput = document.getElementsByClassName("price");


  const title = titleInput[position].innerHTML;
  const price = priceInput[position].innerHTML;

  const item = new Item(title, price)
  listItems.addCard(item)
  listItems.saveList()
}
