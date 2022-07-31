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
