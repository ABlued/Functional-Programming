/**
 * 이에 대한 해결책은 암묵적 인자를 명시적인 인자로 바꾸는 것이다.
 * 이를 암묵적 인자를 드러내기 라는 리팩터링이라 부르며
 * 드러낸다 라는 의미는 암묵적인 것을 명시적으로 바꾼다는 것을 말한다.
 * 리팩터링 단계는 다음과 같다.
 * 1. 함수 이름에 있는 암묵적 인자를 확인한다.
 * 2. 명시적인 인자를 추가한다.
 * 3. 함수 본문에 하드 코딩된 값을 새로운 인자로 바꾼다.
 * 4. 함수를 부르는 곳을 고친다.
 */

const cart = {};

cart = setFieldByName(cart, 'shoes', 'price', 13);
cart = setFieldByName(cart, 'shoes', 'quantity', 3);
cart = setFieldByName(cart, 'shoes', 'shipping', 0);
cart = setFieldByName(cart, 'shoes', 'tax', 2.34);

// cart = setPriceByName(cart, "shoes", 13);
// cart = setQuanitityByName(cart, "shoes", 3);
// cart = setShippingByName(cart, "shoes", 0);
// cart = setTaxByName(cart, "shoes", 2.34);

function setFieldByName(cart, name, field, value) {
  const item = cart[name];
  const newItem = objectSet(item, field, value);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

/**
 * 리팩터링으로 필드명을 일급 값으로 만들었다.
 * 값은 변수나 배열에 담을 수 있다.
 * 그래서 일급(first-class)라고 부른다.
 */
