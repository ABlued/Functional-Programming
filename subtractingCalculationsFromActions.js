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

/**
 * 이런 식으로 함수 내에 암묵적 입력, 출력을 제거하여 액션에서 계산을 빼내는 것이 좋다.
 * 이런 방식을 통해 함수는
 * 1. DOM 업데이트와 비즈니스 로직이 분리되었으며
 * 2. 함수는 더 이상 전역변수의 의존되지 않고
 * 3. 결괏값을 리턴하게 되었다.
 *
 * 이런 방식은 다음의 장점들이 있다.
 *
 * 1. 재사용성을 높인다. (액션보다는 계산이 여러 군데에서 사용될 가능성이 높다.)
 * 2. 쉽게 테스트할 수 있다.(계산은 함수의 호출시점, 호출한 수의 의존하지 않는다.)
 */

function setCartTotalDom() {
  // 금액 합계를 반영하기 위해 DOM 업데이트를 하는 코드...
}
