let shoppingCart = [];
let shoppingCartTotal = 0;

function addItemToCart(name, price) {
  shoppingCart = addItem(shoppingCartTotal, name, price);
  calcCartTotal(shoppingCart);
  const total = clacTotal(cart);
  setCartTotalDom(total);
  updateShippingIcons(cart);
  updateTaxDom(total);
}

function addItem(cart, name, price) {
  let newCart = cart.slice();
  newCart.push({
    name,
    price,
  });
  return newCart;
}

function clacTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price;
  }
  return total;
}

function updateShippingIcons(cart) {
  const buyButtons = getBuyButtonDom();
  for (let i = 0; i < buyButtons.length; i++) {
    const button = buyButtons[i];
    const item = button.item;
    const newCart = addItem(cart, item.name, item.price);
    if (getsFreeShipping(newCart)) {
      button.showFreeShoppingIcons();
    } else {
      button.hideFreeShoppingIcons();
    }
  }
}

function getsFreeShipping(cart) {
  // 함수의 기능 자체를 바꾸었기 때문에 리팩토링이 아닙니다.
  // 하지만 장바구니 내용을 이용하여 무료 배송인지 알려줍니다.
  // 또한 중복되는 코드도 사라졌습니다.
  return clacTotal(cart) >= 20;
}

function updateTaxDom(total) {
  setTaxDom(clacTax(total));
}

function clacTax(amount) {
  return amount * 0.1;
}

function setTaxDom() {
  // 세금을 반영하기 위해 DOM 업데이트를 하는 코드...
}

function setCartTotalDom(total) {
  // 금액 합계를 반영하기 위해 DOM 업데이트를 하는 코드...
}
