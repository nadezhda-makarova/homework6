const cart = document.querySelector('.cart__products');

const productsList = document.querySelectorAll('.product');

getInfoAboutProduct = (item) => {
  const controlsItem = item.querySelector('.product__controls');
  const countBlock = controlsItem.querySelector('.product__quantity-value');
  const imgItem = item.querySelector('.product__image').src;
  const quantity = item.querySelectorAll('.product__quantity-control');
  const dataId = item.getAttribute('data-id');

  quantity.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.classList.contains('product__quantity-control_dec')) {
        if (Number(countBlock.textContent) - 1 === 0) {
          return;
        } else {
          countBlock.innerHTML = Number(countBlock.textContent) - 1;
        }
      } else {
        countBlock.innerHTML = Number(countBlock.textContent) + 1;
      }
    });
  });
  const addBtn = controlsItem.querySelector('.product__add');



  addBtn.addEventListener('click', () => {

    const div = document.createElement('div');

    div.setAttribute('data-id', dataId);
    div.classList.add('cart__product');

    div.innerHTML = `
      <img class="cart__product-image" src=${imgItem}>
      <div class="cart__product-count">${countBlock.textContent}</div>
    `;

    const cartList = cart.querySelectorAll('.cart__product');

    if (cartList.length < 1) {
      return cart.appendChild(div);
    } else {
      cartList.forEach(item => {
        const idElem = item.getAttribute('data-id');
        const countElem = item.querySelector('.cart__product-count');
        if (idElem === dataId) {
          item.remove();
          div.querySelector('.cart__product-count').innerHTML = countElem.innerHTML = Number(countElem.textContent) + Number(countBlock.textContent);
        } else {
          return cart.appendChild(div)
        }
      });
    }

  });
};

productsList.forEach((el) => {
  getInfoAboutProduct(el);
});