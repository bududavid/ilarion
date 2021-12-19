//https://api.telegram.org/bot5043630786:AAGC2iMe3rLikYGJZRaN3LUCl2HjLmWtgzg/getUpdates;

//https://api.telegram.org/bot5043630786:AAGC2iMe3rLikYGJZRaN3LUCl2HjLmWtgzg/sendMessage?chat_id=2134098801&text=Привет)

document.querySelector('button').onclick = function () {
	let mesage = document.querySelector('input').value;
	let xhttp = new XMLHttpRequest();
	const token = '5043630786:AAGC2iMe3rLikYGJZRaN3LUCl2HjLmWtgzg';
	const id01 = 2134098801;
	const id02 = -686388767;
	const url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + id02 + '&text='
	xhttp.open('GET', url + mesage, true);
	xhttp.send();
}

