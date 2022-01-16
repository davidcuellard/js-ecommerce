class Cards {
  constructor(fields) {
      this.fields = fields
      this.nodo = document.createElement('div')
      this.nodo.setAttribute("class","productsClass")
      this.addPaints()
  }

  addPaints() {
      for (let field of this.fields) {
          const input = new CardPaint(field.id, field.image, field.name, field.year, field.price)
          this.nodo.appendChild(input.nodo)
      }
  }
}