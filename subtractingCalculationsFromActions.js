let shoppingCart = [];
let shoppingCartTotal = 0;

function addItemToCart(name, price) {
  shoppingCart = addItem(shoppingCartTotal, name, price);
  calcCartTotal(shoppingCart);
}

function addItem(cart, name, price) {
  let newCart = cart.slice();
  newCart.push({
    name,
    price,
  });
  return newCart;
}

function calcCartTotal() {
  shoppingCartTotal = clacTotal();
  setCartTotalDom();
}

function clacTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price;
  }
  return total;
}

function updateShippingIcons() {
  const buyButtons = getBuyButtonDom();
  for (let i = 0; i < buyButtons.length; i++) {
    const button = buyButtons[i];
    const item = button.item;
    if (getsFreeShipping(shoppingCartTotal, item.price)) {
      // Dom 업데이트 로직과 비즈니스 규칙이 분리되었다.
      button.showFreeShoppingIcons();
    } else {
      button.hideFreeShoppingIcons();
    }
  }
}

function getsFreeShipping(itemPrice, total) {
  return itemPrice + total >= 20; // 암묵적 입력과 출력이 없다.
}

function updateTaxDom() {
  setTaxDom(clacTax(shoppingCartTotal));
}

function clacTax(amount) {
  return amount * 0.1;
}

function setTaxDom() {
  // 세금을 반영하기 위해 DOM 업데이트를 하는 코드...
}

function setCartTotalDom() {
  // 금액 합계를 반영하기 위해 DOM 업데이트를 하는 코드...
}
