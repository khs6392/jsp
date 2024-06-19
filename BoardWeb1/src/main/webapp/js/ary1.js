/**
 * ary1.js
 * forEach, filter, map, reduce
 */

const numAry = [23, 17, 6, 41, 30, 12];
let result = 0;

let evenSum = function(elem, idx, ary) {
	console.log(elem, idx, ary);
	if (elem % 2 == 0) {
		result += elem;
	}
};

let oddSum = function(elem, idx, ary) {
	if (idx % 2 == 0) {
		result += elem;
	}
};

// 35보다 작은 값들의 합을 저장.
let less35 = function(elem, idx, ary) {
	if (elem < 35) {
		result += elem;
	}
};

numAry.forEach(evenSum); // 매개값으로 함수.
console.log('짝수 합은 : ', result);

numAry.forEach(oddSum); // 매개값으로 함수.
console.log('홀수번째 값은 : ', result);

numAry.forEach(less35); // 매개값으로 함수.
console.log('35보다 작은 값들의 합 : ', result);






const dupAry = [10, 27, 32, 55, 27, 10];
const ary = []; //indexOf(10) => 인덱스값을 반환. 없으면 -1반환.
// push

//중복된 값을 제거하고 중복된 값을 ary에 등록.
dupAry.forEach(function(elem){
	 if (ary.indexOf(elem) === -1) {
        ary.push(elem);
    }
});
console.log(ary);
