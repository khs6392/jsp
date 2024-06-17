/*
 * dom1.js
 */

document.getElementById('fruit').style.display = 'none';

document.querySelector('table.table tr:nth-of-type(5)').setAttribute('align', 'center'); // 가운데 정렬

// 페이지가 로드되면서 회원 3명 출력
document.addEventListener('DOMContentLoaded', function() {
	const memberList = document.getElementById('memberList');
	myMembers.forEach(member => {
		memberList.appendChild(addRow(member));
	});
	console.log(myMembers);
});

// 추가 버튼 클릭 이벤트 등록
document.getElementById('addBtn').addEventListener('click', addMemberFnc);
document.getElementById('modBtn').addEventListener('click', modMemberFnc);
document.getElementById('delBtn').addEventListener('click', removeMemberFnc);
document.querySelector('thead input[type = "checkbox"]').addEventListener('change', asllCheckFnc);



// 전체선택
function asllCheckFnc() {
	// tbody의 하위에 있는 input[type = "checkbox"]의 속성을 변경
	console.log(this.checked); // 활용하면 편하게 작업가능
	document.querySelectorAll('tbody#memberList tr')// NodeList [tr, tr, tr......]
		.forEach(item => item.children[5].children[0].checked = this.checked);
		if(tr.children[5].children[0].checked == false){
			ch = document.querySelector('thead input[type = "checkbox"]');
			ch.setAttribute(false); 
		}
}


//선택삭제.
function removeMemberFnc() {
	let targetTr = document.querySelectorAll('#memberList tr');
	for (let tr of targetTr) {
		console.log(tr.children[5].children[0].checked);
		if (tr.children[5].children[0].checked) {
			tr.remove();
		}
	}
}

function addMemberFnc() {
	const id = document.getElementById('mid').value;
	const name = document.getElementById('mname').value;
	const phone = document.getElementById('mphone').value;
	const point = document.getElementById('mpoint').value;

	if (!id || !name || !phone || !point) {
		alert('필수값을 입력하세요.');
		return;
	}

	document.getElementById('memberList').appendChild(addRow({ id, name, phone, point }));

	document.getElementById('mid').value = "";
	document.getElementById('mname').value = "";
	document.getElementById('mphone').value = "";
	document.getElementById('mpoint').value = "";
} // end of addMemberFnc()

// 수정 버튼 클릭 이벤트 등록
function modMemberFnc() {
	let id = document.getElementById('mid').value;
	let name = document.getElementById('mname').value;
	let phone = document.getElementById('mphone').value;
	let point = document.getElementById('mpoint').value;

	if (!id || !name || !phone || !point) {
		alert('필수값을 입력하세요.');
		return;
	}

	let targetTr = document.querySelectorAll('#memberList tr');
	for (let tr of targetTr) {
		console.log(tr.children[0].innerHTML, id);
		if (tr.children[0].innerText == id) {
			tr.children[1].innerText = name;
			tr.children[2].innerText = phone;
			tr.children[3].innerText = point;
		}
	}

	document.getElementById('mid').value = "";
	document.getElementById('mname').value = "";
	document.getElementById('mphone').value = "";
	document.getElementById('mpoint').value = "";
} // end of modMemberFnc

function addRow(member = { id, name, phone, point }) {
	// tr > td * 4
	const tr = document.createElement('tr');
	tr.addEventListener('click', showDetailFnc);

	for (let prop in member) {
		const td = document.createElement('td');
		td.innerHTML = member[prop];
		tr.appendChild(td);
	}

	// 삭제 버튼 생성 td btn 버튼에 삭제 기능 추가
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.addEventListener('click', removerTrElement);
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	// 체크박스 생성.
	td = document.createElement('td');
	btn = document.createElement('input');
	btn.setAttribute('type', 'checkbox');
	td.appendChild(btn);
	tr.appendChild(td);

	return tr;
} // end of addRow()

// 이벤트핸들러.
function removerTrElement(e) {
	console.log('btn', e);
	e.stopPropagation(); //상위요소로 이벤트전파 차단.
	console.log(this.parentElement.parentElement.remove());
}

function showDetailFnc(e) {
	console.log('tr', e);
	// tr 자식요소의 값을 입력 input에 반환
	console.dir(this.children[1].innerText);
	document.getElementById('mid').value = this.children[0].innerText;
	document.getElementById('mname').value = this.children[1].innerText;
	document.getElementById('mphone').value = this.children[2].innerText;
	document.getElementById('mpoint').value = this.children[3].innerText;
}
