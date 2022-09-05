/**
 * 어떤 동작은 읽고 변경하는 일을 동시에 한다. 이런 동작은 값을 변경하고 리턴한다.
 * 예로 들면 array.prototype.shift 메소드가 있다.
 *
 * const a = [1,2,3,4];
 * const b = a.shift();
 *
 * console.log(a) // [2,3,4]
 * console.log(b) // 1
 *
 * shift 메서드는 값을 바꾸는 동시에 배열에 첫 번째 항목을 리턴한다.
 * 이 동작을 카피-온-라이트로 바꿔야한다.
 */

/**
 * 바꾸는 방법에는 2가지가 있다.
 *
 * 1. 읽기와 쓰기 함수로 각각 분리한다
 * 2. 함수에서 값을 두 개 분리한다.
 */

// 1. 읽기와 쓰기 동작으로 분리하기

function first_element(array) {
  // 읽기(계산)
  return array[0];
}

function drop_first(array) {
  // 쓰기
  const array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

// 이제 읽기와 쓰기를 선택해서 쓸 수 있다.

// 2. 함수에서 값을 두 개를 리턴한다.

function shift(array) {
  const array_copy = array.slice();
  const first = array_copy.shift();
  return {
    first: first,
    array: array_copy,
  };
}

// 혹은 이렇게도 쓸 수 있다.

function shift2(array) {
  return {
    first: first_element(array),
    array: drop_first(array),
  };
}
