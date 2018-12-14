function add() {
	var number1 = parseInt(document.getElementById('so1').value);
	var number2 = parseInt(document.getElementById('so2').value);
	var area = number1 + number2;
	document.getElementById('ketqua').innerHTML=('Kết quả là ' + area);
}
function sub() {
	var number1 = parseInt(document.getElementById('so1').value);
	var number2 = parseInt(document.getElementById('so2').value);
	var area = number1 - number2;
	document.getElementById('ketqua').innerHTML=('Kết quả là ' + area);
}
function mul() {
	var number1 = parseInt(document.getElementById('so1').value);
	var number2 = parseInt(document.getElementById('so2').value);
	var area = number1 * number2;
	document.getElementById('ketqua').innerHTML=('Kết quả là ' + area);
}
function div() {
	var number1 = parseInt(document.getElementById('so1').value);
	var number2 = parseInt(document.getElementById('so2').value);
	var area = number1 / number2;
	document.getElementById('ketqua').innerHTML=('Kết quả là ' + area);
}
