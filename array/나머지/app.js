const { count } = require('console');
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
/* 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 
예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다.
 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오. */
//숫자로 변환
let num = input.map(Number);
//배열 안에 있는 변수 %를 함
let sum = num.map((a)=> 42%a);
//array로 묶음
const set = new Set(arr);
let array = [...set];
console.log(array.length)


/*
배열에 중복제거 
Set 객체를 활용해 중복된 요소가 없는 컬렉션을 생성한 후 배열로 만드는 방법
filter() 와 indexOf() 활용하여 콜백에서 받아온 요소를 indexOf()에 전달 해 주어 검사중인 요소의 index와 배열에서 해당 요소의 첫 index를 비교하여 새로운 배열을 만드는 방법
foreEach() 와 includes()를 활용하여 기존 배열에 없는 요소만 새로운 배열에 추가해서 중복 없는 배열을 만드는 방법. */