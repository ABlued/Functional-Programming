let shoppingCart = [];
let shoppingCartTotal = 0;

// 의미 있는 계층에 대해서 알아봅시다
// 함수가 장바구니 구조를 알아야 하면 C,
// 제품 구조를 알아야 하면 I
// 비즈니스 규칙에 대한 함수이면 B를 표시합시다.

function addItemToCart(name, price) {
  shoppingCart = addItem(shoppingCartTotal, name, price);
  calcCartTotal(shoppingCart);
  const total = clacTotal(cart);
  setCartTotalDom(total);
  updateShippingIcons(cart);
  updateTaxDom(total);
}
// C, I
function addItem(cart, name, price) {
  let newCart = cart.slice();
  newCart.push({
    name,
    price,
  });
  return newCart;
}
// C, I, B
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
// B
function getsFreeShipping(cart) {
  // 함수의 기능 자체를 바꾸었기 때문에 리팩토링이 아닙니다.
  // 하지만 장바구니 내용을 이용하여 무료 배송인지 알려줍니다.
  // 또한 중복되는 코드도 사라졌습니다.
  return clacTotal(cart) >= 20;
}

function updateTaxDom(total) {
  setTaxDom(clacTax(total));
}
// B
function clacTax(amount) {
  return amount * 0.1;
}

function setTaxDom() {
  // 세금을 반영하기 위해 DOM 업데이트를 하는 코드...
}

function setCartTotalDom(total) {
  // 금액 합계를 반영하기 위해 DOM 업데이트를 하는 코드...
}
