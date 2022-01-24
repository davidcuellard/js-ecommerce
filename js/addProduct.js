"use strict";
let total = 0;

class Item {
  constructor(title, price) {
    this.title = title
    this.price = parseFloat(price)
  }

  static getHTML(title, price) {
    return `
      <p>${title}</p>
      <p> Price: ${price}</p>
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

  sumTotal(objectItem){
    total = total + objectItem.price;
    console.log(total)
    $("#totalBuyed").replaceWith(`<h4 id="totalBuyed">  ${total} </h4>`);
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
  listItems.sumTotal(item)
}
