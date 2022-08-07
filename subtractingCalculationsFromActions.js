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

function addItem(cart, item) {
  return addElementLast(cart, item);
}

// 장바구니 제품에만 쓸 수 있는 함수가 아닌 배열이나 항목에도 쓸 수 있는 이름으로 바꿨습니다.
function addElementLast(array, element) {
  let newArray = array.slice();
  newArray.push(element);
  return newArray;
}

// I
function makeCartItem(name, price) {
  return {
    name,
    price,
  };
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
