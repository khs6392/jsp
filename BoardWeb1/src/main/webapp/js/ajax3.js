/**
 * ajax3.js
 */
// 목록 가져오기.
const xthp = new XMLHttpRequest();
xthp.open('get', 'membersAjax.do');
xthp.send();
xthp.onload = function() {
	console.log(xthp);
	let data = JSON.parse(xthp.responseText);
	data.forEach(user => {
		document.getElementById('list').appendChild(makeRow(user));
	})
}
// json 문자열의 필드이름을 활용.
const fields = ['userId', 'userName', 'userPw', 'responsibility'];
function makeRow(obj = {}) {
	let tr = document.createElement('tr');
	tr.setAttribute('id', obj.userId); // <tr id = 'user01' ....>
	tr.addEventListener('dblclick',function(e){
		document.getElementById('myModal').style.display = 'block';
		// 선택된 사용자의 이름, 비번을 모달에 출력
		console.log(e, this);
		document.getElementById('modify_name').value = //
		this.children[1].innerHTML;
		document.getElementById('modify_pass').value = //
		this.children[2].innerHTML;
		document.getElementById('modify_id').value = //
		this.children[3].innerHTML;
	})
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = obj[field];
		tr.appendChild(td);
	})
	// 삭제 버튼 생성 td btn 버튼에 삭제 기능 추가
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('date-delid', obj.userId);
	btn.addEventListener('click', removeMemberFnc);
	btn.innerHTML = '삭제';
	btn.className = 'btn btn-danger';
	td.appendChild(btn);
	tr.appendChild(td);

	// 체크박스 생성.
	td = document.createElement('td');
	btn = document.createElement('input');
	btn.setAttribute('type', 'checkbox');
	td.appendChild(btn);
	tr.appendChild(td);

	return tr;
} //end of makeRow().

function removeMemberFnc(e) {
	console.log(e);
	let did = this.dataset.delid;
	did = e.target.parentElement.parentElement.children[0].innerText;
	let tr = document.getElementById(did);
	const delAjax = new XMLHttpRequest();
	delAjax.open('get', 'removeAjax.do?id=' + did);
	delAjax.send();
	delAjax.onload = function() {
		let result = JSON.parse(delAjax.responseText);
		if (result.retCode == 'OK') {
			alert('정상삭제');
			tr.remove();
		} else {
			alert('실패');
		}
	}
}

// 수정이벤트.
document.getElementById('modBtn').addEventListener('click', function() {
    let id = document.getElementById('modify_id').value;
    let name = document.getElementById('modify_name').value;
    let pass = document.getElementById('modify_pass').value;

    const modAjax = new XMLHttpRequest();
    let url = 'modAjax.do?id=' + id + '&pw=' + pass + '&nm=' + name;
    modAjax.open('GET', url);
    modAjax.send();
    modAjax.onload = function() {
        let result = JSON.parse(modAjax.responseText);
        if (result.retCode == 'OK') {
            let targetTr = document.getElementById(id);
            targetTr.children[1].innerHTML = name;
            targetTr.children[2].innerHTML = pass;
            alert(result.retMsg);
        } else {
            alert('수정 실패');
        }
    };

    // 모달창 닫기
    document.getElementById('myModal').style.display = 'none';
});
// 등록이벤트.
document.getElementById('addBtn').addEventListener('click', function() {
	let id = document.getElementById('uid').value;
	let pw = document.getElementById('upw').value;
	let nm = document.getElementById('uname').value;
	let auth = document.getElementById('auth').value;

	const addAjax = new XMLHttpRequest();
	let url = 'addAjax.do?id=' + id + '&pw=' + pw + '&nm=' + nm + '&auth=' + auth;
	addAjax.open('get', url)
	addAjax.send();
	addAjax.onload = function() {
		let result = JSON.parse(addAjax.responseText);
		if (result.retCode == 'OK') {
			let newMem = { userId: id, userPw: pw, userName: nm, responsibility: auth }
			alert(result.retMsg);
			document.getElementById('list').appendChild(makeRow(newMem));
		} else {
			alert('실패');
		}
	}
}) // end of add event

// id 체크 이벤트.
document.getElementById('uid').addEventListener('change', function() {
	let checkId = this.value;

	const checkAjax = new XMLHttpRequest();
	checkAjax.open('get', 'checkIdAjax.do?id=' + checkId);
	checkAjax.send();
	checkAjax.onload = function() {
		let result = JSON.parse(checkAjax.responseText);
		if (result.retCode == 'Exist') {
			alert('이미 존재하는 아이디입니다.')
			document.querySelector('#addBtn').disabled = true;
		} else {
			alert('등록가능한 아이디입니다.')
			document.querySelector('#addBtn').disabled = false;
		}
	}
})// end of check event

// 선택 삭제 이벤트.
document.getElementById('removeBtn').addEventListener('click', function() {
	let checkboxes = document.querySelectorAll('#list input[type="checkbox"]:checked');
	checkboxes.forEach(checkbox => {
		let userId = checkbox.closest('tr').children[0].innerText;
		const removeajax = new XMLHttpRequest();
		removeajax.open('GET', 'removeAjax.do?id=' + userId);
		removeajax.send();
		removeajax.onload = function() {
			let result = JSON.parse(removeajax.responseText);
			if (result.retCode === 'OK') {
				document.getElementById('list').appendChild(makeRow());
				alert(result.retMsg);
			} else {
				alert('삭제 실패');
			}
		};
	});
});
