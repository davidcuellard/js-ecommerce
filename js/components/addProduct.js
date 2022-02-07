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
    card.setAttribute("class",`listLi`)
    card.innerHTML = Item.getHTML(objectItem.id, objectItem.title, objectItem.price); 
    this.nodolist.appendChild(card); 
    this.itemsBuyed.push(objectItem);
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

  delItemsBuyedArray(toFind){

    //find id to delete
    const toDelete = this.itemsBuyed.find( e => e.id == toFind );
    let index = this.itemsBuyed.indexOf(toDelete);

    //Delete item by id
    let listArrayNew = this.itemsBuyed.splice(index, 1)
  }

}

const listItems = new ListItems()

function saveCard(idFind) {

  const listItemsLocal = localStorage.getItem('productFields')
  let listArrayLocal = JSON.parse(listItemsLocal)

  const itemFind = listArrayLocal.find( e => e.id == idFind );
  let index = listArrayLocal.indexOf(itemFind);

  let name = listArrayLocal[index].name;
  let price = listArrayLocal[index].price;

  const item = new Item(idFind, name, price)
  listItems.addCard(item)
  listItems.saveList()
  listItems.sumTotal(item)
  hideAddButton()
  showTotal()
}



function showTotal(){
  $("#totalBuyed").replaceWith(`<h4 id="totalBuyed">  ${sum} USD</h4>`);
}
