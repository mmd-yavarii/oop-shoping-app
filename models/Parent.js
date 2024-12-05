class App {
  constructor(parentElement, products) {
    this.products = products;
    this.parentElement = parentElement;
    this.cartProducts = [];
  }

  // search with name
  search(event) {
    const productsNode = document.querySelectorAll(".name");

    productsNode.forEach((item) => {
      const element = item.parentElement.parentElement.parentElement;
      const name = item.innerText.toLowerCase();
      const value = event.target.value.toLowerCase();

      if (name.includes(value)) {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    });
  }

  show() {
    this.products.forEach((item) => {
      const background = item.color.replace("0%", "0% / 0.121");
      const rotate = () => 10 + Math.floor(Math.random() * 180);
      const { id, name, image, gender, brand, price, color } = item;

      this.parentElement.innerHTML += `
          <div class="products" style="background-color:${background};">
               <div class="image">
                  <span style="background-color:${background}; transform: translate(-50%, -50%) rotate(${rotate()}deg);"></span>
                  <img src="${image}" alt="" />
               </div>
               <div class="info">
                   <div>
                   <p class="gender">${gender}</p>
                   <p class="name">${brand} ${name}</p>
                   <p class="price" style="color:${color};">${price}</p>
                   </div>
                   <div class="btn-container">
                      <button data-id="${id}" style="display :none;">-</button>
                      <span style="display : none;"> 0 </span>
                      <button data-id="${id}">+</button>
                   </div>
               </div>
           </div>
       `;
    });
  }
}

export default App;
