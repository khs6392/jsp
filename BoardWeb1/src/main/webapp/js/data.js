/**
 * data.js
 */
const myMembers = [
	{ id: 'user01', name: '홍길동', phone: '010-1111-2222', point: 90 }, // new Object();
	{ id: 'user02', name: '박석민', phone: '010-2341-2321', point: 95 },
	{ id: 'user03', name: '김시후', phone: '010-4567-7896', point: 120 }
]; // new Array();

const json = `[{"id":1,"first_name":"Fidelio","last_name":"Barmadier","email":"fbarmadier0@reference.com","gender":"Male","salary":5679},
{"id":2,"first_name":"Lezley","last_name":"Spohrmann","email":"lspohrmann1@hp.com","gender":"Male","salary":5176},
{"id":3,"first_name":"Sigfrid","last_name":"Tarbox","email":"starbox2@go.com","gender":"Male","salary":3592},
{"id":4,"first_name":"Jarrid","last_name":"Desport","email":"jdesport3@spotify.com","gender":"Male","salary":3097},
{"id":5,"first_name":"Eliza","last_name":"Kivits","email":"ekivits4@facebook.com","gender":"Female","salary":4143},
{"id":6,"first_name":"Caryn","last_name":"Soulsby","email":"csoulsby5@answers.com","gender":"Female","salary":5014},
{"id":7,"first_name":"Dickie","last_name":"Gilderoy","email":"dgilderoy6@creativecommons.org","gender":"Male","salary":4639},
{"id":8,"first_name":"Sven","last_name":"Brayshay","email":"sbrayshay7@ox.ac.uk","gender":"Male","salary":5328},
{"id":9,"first_name":"Ole","last_name":"Bourges","email":"obourges8@4shared.com","gender":"Male","salary":6130},
{"id":10,"first_name":"Harman","last_name":"Rhodus","email":"hrhodus9@amazon.de","gender":"Male","salary":3118},
{"id":11,"first_name":"Rodger","last_name":"Casserly","email":"rcasserlya@wix.com","gender":"Male","salary":5859},
{"id":12,"first_name":"Stillman","last_name":"Widd","email":"swiddb@51.la","gender":"Male","salary":5074},
{"id":13,"first_name":"Jared","last_name":"Drei","email":"jdreic@guardian.co.uk","gender":"Male","salary":6175},
{"id":14,"first_name":"Doro","last_name":"Vernham","email":"dvernhamd@wisc.edu","gender":"Female","salary":3501},
{"id":15,"first_name":"Alanah","last_name":"Hehl","email":"ahehle@furl.net","gender":"Female","salary":7568}]`;

const employees = JSON.parse(json);
