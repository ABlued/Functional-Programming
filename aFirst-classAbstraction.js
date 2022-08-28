// 이 함수들은 문제점이 2가지 있다.
/**
 * 첫째는 중복되는 코드들이며
 * 둘째는 필드를 결정하는 문자열이 함수 이름에 있다는 것이다.
 * 함수 이름에 있는 일부가 인자처럼 동작한다.
 * 이렇게 값을 명시적으로 전달하지 않고 함수 이름의 일부로 '전달'하고 있습니다.
 * 이를 '함수 이름에 있는 암묵적 인자' 라고 부른다.
 */
function setPriceByName(cart, name, price) {
  const item = cart[name];
  const newItem = objectSet(item, 'price', price);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}
function setQuantityByName(cart, name, quant) {
  const item = cart[name];
  const newItem = objectSet(item, 'quantity', quant);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}
function setShippingByName(cart, name, ship) {
  const item = cart[name];
  const newItem = objectSet(item, 'shipping', ship);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}
function setTaxByName(cart, name, tax) {
  const item = cart[name];
  const newItem = objectSet(item, 'tax', tax);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
