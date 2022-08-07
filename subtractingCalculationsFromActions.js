let shoppingCart = [];
let shoppingCartTotal = 0;

// 의미 있는 계층에 대해서 알아봅시다
// 함수가 장바구니 구조를 알아야 하면 C,
// 제품 구조를 알아야 하면 I
// 비즈니스 규칙에 대한 함수이면 B를 표시합시다.

function addItemToCart(name, price) {
  shoppingCart = addItem(shoppingCartTotal, makeCartItem(name, price));
  calcCartTotal(shoppingCart);
  const total = clacTotal(cart);
  setCartTotalDom(total);
  updateShippingIcons(cart);
  updateTaxDom(total);
}
// C
function addItem(cart, item) {
  let newCart = cart.slice();
  newCart.push(item);
  return newCart;
}
// I
function makeCartItem(name, price) {
  return {
    name,
    price,
  };
}
/**
 * 이렇게 C, I 구조를 알아야 했던 함수를 분리하면 cart와 item을 독립적으로 확장할 수 있습니다.
 * 예를 들어 배열인 cart를 해시ㅣ 맵 같은 자료 구조로 바꾼다고 할 때 변경해야 할 부분이 적어집니다.
 */
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
    const newCart = addItem(cart, makeCartItem(item.name, item.price));
    if (getsFreeShipping(newCart)) {
      button.showFreeShoppingIcons();
    } else {
      button.hideFreeShoppingIcons();
    }
  }
}
// B
function getsFreeShipping(cart) {
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
