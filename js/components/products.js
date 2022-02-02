"use strict";

class CardPaint {
  constructor(id ,image, name, year, price) {
      this.id = id
      this.image = image
      this.name = name
      this.year = year
      this.price = price
      this.nodo = document.createElement('div')
      this.nodo.setAttribute("class","card-paint")
      this.nodo.innerHTML = this.genHTML()
      this.addEvent()
  }
  
  genHTML() {
      return `
          <img src="${this.image}" class="paint">
          <form action="javascript:saveCard(${this.id})">
            <p class="title">${this.name}</p>
            <p>Year ${this.year}</p>
            <p class="price">${this.price} USD</p>
            <button class="buttonAdd button${this.id}">Add</button>
          </form> 
      `
  }

  addEvent() {
    $(this.nodo).on('click', (event) => {
        if (event.target.tagName === "BUTTON") {
            console.log(`New product added: ${this.name}`)
        }
    }) 
  }
}

