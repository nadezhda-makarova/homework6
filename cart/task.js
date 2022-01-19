const cart = document.querySelector('.cart__products');

const productsList = document.querySelectorAll('.product');
let arr = [];

getDataIdProducts = () => {
  productsList.forEach(item => {
    arr.push(item.getAttribute('data-id'));
  });
};

getDataIdProducts();

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

    div.setAttribute('id', dataId);
    div.classList.add('cart__product');

    div.innerHTML = `
      <img class="cart__product-image" src=${imgItem}>
      <div class="cart__product-count">${countBlock.textContent}</div>
    `;
    const idRenderElem = arr.find(item => item === dataId);
    if(document.getElementById(idRenderElem)) {
      const findedElem = document.getElementById(idRenderElem);
      const prevCount = findedElem.querySelector('.cart__product-count').textContent;
      findedElem.querySelector('.cart__product-count').innerHTML = Number(countBlock.textContent) + Number(prevCount);
    } else {
      cart.appendChild(div);
    }
  });
};

productsList.forEach((el) => {
  getInfoAboutProduct(el);
});