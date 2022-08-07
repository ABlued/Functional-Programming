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
    // 또한 중복된 코드가 있습니다. 합계에 제품 가격을 더하는 코드가 두 군데 있습니다.
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
  // 이 함수에는 더 이상 암묵적 입출력이 없지만 요구사항에 부합한 함수입니다.
  /**
   * 요구 사항은 장바구니에 담긴 제품을 주문할 때 무료 배송인지 확인하는 것인데
   * 장바구니로 무료 배송을 확인하지 않고 제품의 합계와 가격으로 학인하고 있습니다.
   * 이 함수는 비즈니스 요구 사항과 맞지 않는 인자라고 할 수 있습니다.
   */
  return itemPrice + total >= 20;
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
