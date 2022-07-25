let shoppingCart = [];
let shoppingCartTotal = 0;

function addItemToCart(name, price) {
  shoppingCart.push({
    // 전역 변수를 수정하였으므로 암묵적 출력입니다.
    name,
    price,
  });
  calcCartTotal(shoppingCart);
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

function setCartTotalDom() {
  // 금액 합계를 반영하기 위해 DOM 업데이트를 하는 코드...
}

/**
 * 위와 같은 함수는 좋지 않다.
 * 그 이유는 다음과 같다.
 * 1. DOM 업데이트와 비즈니스 로직이 하나의 함수에서 동작하고 있다.
 * 2. 함수 내에서 전역변수를 읽고 수정하고 있다.
 *
 * 이와 같은 이유로 다음 함수는 3가지의 규칙을 통해 리팩토링하고자 한다.
 * 1. 전역변수에 의존하지 말 것
 * 2. DOM을 사용할 수 있는 곳에서 실행된다고 가정하지 말 것
 * 3. 함수는 결괏값을 리턴할 것
 *
 */
