/**
 * ary3.js
 */

// 리듀스! 필터 맵 몰라도 이것만 알아도 될거같음 이라고 교수님이 말함
// 어떤 값이라도 만들어서 변환가능
// 배열안의 값중에 최대값 출력하는 코드
let sum =
	[10, 20, 30, 40, 50].reduce(function(acc, elem, idx, ary) {
		console.log(acc, elem);//, idx, ary);
		if (acc > elem){
			return acc;
		}
		//return acc > elem ? acc : elem;
		return elem;		
	}, 0);
console.log('최대값 : ',sum);	


['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'].reduce(function(acc,elem){
	let li = document.createElement('li');
	li.innerHTML = elem;
	acc.appendChild(li);
	
	return acc;
},document.getElementById('fruit'));
    
   