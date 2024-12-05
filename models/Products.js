import App from "./Parent.js";

class Products extends App {
  constructor(parentElement, products) {
    super(parentElement, products);
    this.parentElement.addEventListener("click", this);
  }

  // all events to add or remove carts
  handleEvent(event) {
    const tagName = event.target.tagName.toLowerCase();
    const which = event.target.innerText;

    if (tagName === "button") {
      switch (which) {
        case "+":
          this.increase(event.target);
          break;

        case "-":
          this.decrease(event.target);
          break;
      }
    }
  }

  // add a product to cart
  increase(event) {
    const product = this.products.find((i) => i.id === event.dataset.id);
    const btnsAndSpan = [...event.parentElement.children];

    // / show button(-) and increase span value
    btnsAndSpan.forEach((i) => {
      if (i.tagName == "SPAN") i.innerText = +i.innerText + 1;
      i.style.display = "flex";
    });
    this.cartProducts.push(product);
  }

  // remove a product from cart
  decrease(event) {
    const index = this.products.find((i) => i.id === event.dataset.id);
    const btnsAndSpan = [...event.parentElement.children];

    // remove button(-) and decrease span value
    btnsAndSpan.forEach((i) => {
      if (i.tagName == "SPAN") {
        if (+i.innerText > 1) {
          i.innerText = +i.innerText - 1;
        } else {
          btnsAndSpan.forEach((i) => {
            i.style.display = i.innerText == "+" ? "flex" : "none";
            i.tagName == "SPAN" ? (i.innerText = "0") : null;
          });
        }
      }
    });
    this.cartProducts.splice(index, 1);
  }
}

export default Products;
