/**
 * ajax3.js
 */
// 목록 가져오기.
const xthp = new XMLHttpRequest();
xthp.open('GET', 'membersAjax.do');
xthp.send();
xthp.onload = function() {
    let data = JSON.parse(xthp.responseText);
    data.forEach(user => {
        document.getElementById('list').appendChild(makeRow(user));
    });
};

// json 문자열의 필드이름을 활용.
const fields = ['userId', 'userName', 'userPw', 'responsibility'];

function makeRow(obj = {}) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', obj.userId); // <tr id='user01' ...>
    tr.addEventListener('dblclick', function(e) {
        document.getElementById('myModal').style.display = 'block';
        document.getElementById('modify_id').value = obj.userId;
        document.getElementById('modify_name').value = obj.userName;
        document.getElementById('modify_pass').value = obj.userPw;
    });
    fields.forEach(field => {
        let td = document.createElement('td');
        td.innerHTML = obj[field];
        tr.appendChild(td);
    });

    // 삭제 버튼 생성
    td = document.createElement('td');
    let delBtn = document.createElement('button');
    delBtn.setAttribute('data-delid', obj.userId);
    delBtn.addEventListener('click', removeMemberFnc);
    delBtn.innerHTML = '삭제';
    delBtn.className = 'btn btn-danger';
    td.appendChild(delBtn);
    tr.appendChild(td);

    // 체크박스 생성
    td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);

    return tr;
}

function removeMemberFnc(e) {
    e.stopPropagation(); // 상위 요소로 이벤트 전파 차단
    let did = this.dataset.delid;
    let tr = document.getElementById(did);
    const delAjax = new XMLHttpRequest();
    delAjax.open('GET', 'removeAjax.do?id=' + did);
    delAjax.send();
    delAjax.onload = function() {
        let result = JSON.parse(delAjax.responseText);
        if (result.retCode === 'OK') {
            alert('정상 삭제');
            tr.remove();
        } else {
            alert('삭제 실패');
        }
    };
}

// 수정 이벤트

document.getElementById('modBtn').addEventListener('click', function() {
	let id = document.getElementById('modify_id').value;
	let name = document.getElementById('modify_name').value;
	let pass = document.getElementById('modify_pass').value;
	
	// ajax 생성
	// 정상적으로 정보가 업데이트되면 화면 수정.
	// 수정이 안됐으면 화면수정 X
	let targetTr = document.getElementById(id); //
	targetTr.children[1].innerHTML = name;
	targetTr.children[2].innerHTML = pass;
	
	const modAjax = new XMLHttpRequest();
	let url = 'modAjax.do?id=' + id + '&pw=' + pw + '&nm=' + name;
	modAjax.open('get', url)
	modAjax.send();
	modAjax.onload = function() {
		let result = JSON.parse(modAjax.responseText);
		if (result.retCode == 'OK') {
			alert(result.retMsg);
			document.getElementById('list').appendChild(makeRow(''));
		} else {
			alert('실패');
		}
	}
	
	// 모달창 닫기.
	document.getElementById('myModal').style.display = 'none';
	
})	



// 등록 이벤트
document.getElementById('addBtn').addEventListener('click', function() {
    let id = document.getElementById('uid').value;
    let pw = document.getElementById('upw').value;
    let nm = document.getElementById('uname').value;
    let auth = document.getElementById('auth').value;

    const addAjax = new XMLHttpRequest();
    let url = 'addAjax.do?id=' + id + '&pw=' + pw + '&nm=' + nm + '&auth=' + auth;
    addAjax.open('GET', url);
    addAjax.send();
    addAjax.onload = function() {
        let result = JSON.parse(addAjax.responseText);
        if (result.retCode === 'OK') {
            let newMem = { userId: id, userPw: pw, userName: nm, responsibility: auth };
            alert(result.retMsg);
            document.getElementById('list').appendChild(makeRow(newMem));
        } else {
            alert('등록 실패');
        }
    };
});

// id 체크 이벤트
document.getElementById('uid').addEventListener('change', function() {
    let checkId = this.value;

    const checkAjax = new XMLHttpRequest();
    checkAjax.open('GET', 'checkIdAjax.do?id=' + checkId);
    checkAjax.send();
    checkAjax.onload = function() {
        let result = JSON.parse(checkAjax.responseText);
        if (result.retCode === 'Exist') {
            alert('이미 존재하는 아이디입니다.');
            document.querySelector('#addBtn').disabled = true;
        } else {
            alert('등록 가능한 아이디입니다.');
            document.querySelector('#addBtn').disabled = false;
        }
    };
});

// 선택 삭제 이벤트
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
                checkbox.closest('tr').remove();
                alert(result.retMsg);
            } else {
                alert('삭제 실패');
            }
        };
    });
});
