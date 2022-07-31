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
    if (item.price + shoppingCartTotal >= 20) {
      // 물건의 가격이 2만원 이상이면(비즈니스 규칙) 쇼핑아이콘이 활성화 되야한다.(dom 업데이트 로직)
      // 비즈니스 규칙과 dom 업데이트 로직이 한 곳에 동시에 존재하면 좋지 않다.
      // 또 이 구문은 shoppingCartTotal이라는 전역 변수에 접근하고 있다.(암묵적 입력)
      button.showFreeShoppingIcons();
    } else {
      button.hideFreeShoppingIcons();
    }
  }
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
