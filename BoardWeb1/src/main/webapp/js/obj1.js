/**
 * obj1.js
 */
document.getElementById('dom').remove();

// 등록이벤트
document.getElementById('addButton').addEventListener('click', function(e) {
	// 사용자의 입력 값을 employee 객체 생성.
	const employee = {
		id: document.getElementById('id').value,
		first_name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		salary: document.getElementById('salary').value
	}
	// 목록에 추가하기
	document.querySelector('#list').appendChild(obj.makeRow(employee));
});



// 5명 표시
const obj = {
	data: '',
	fileds: ['id', 'first_name', 'email', 'salary'],
	showList: function(ary = []) {
		ary.forEach((emp, idx) => {
			if (idx < 5) {
				document.querySelector('#list').appendChild(this.makeRow(emp));
			}
		});
	},
	makeRow(emp = { id, first_name, email, salary }) {
		let tr = document.createElement('tr');
		this.fileds.forEach(field => {
			let td = document.createElement('td');
			td.innerText = emp[field];
			tr.appendChild(td);
		});
		return tr;
	}
} // end obj

obj.showList(employees);


// 객체 예시
const person = {
	name: "홍길동",
	age: 20
}

person.height = 167.8;
person.showInfo = function() {
	return person.name + ' - ' + person.age + ' - ' + person.height;
}
let prop = 'age';
console.log(person.prop);
console.log(person[prop]);
console.log(person.showInfo());

const today = new Date();
today.getFullYear();

// 2024 - 06 - 19
Date.prototype.format = function() {
	let yy = this.getFullYear();
	let mon = '0' + (this.getMonth() + 1);
	let dd = this.getDate();

	return yy + '년 ' + mon + '월 ' + dd + '일';
}
console.log(today.format());



