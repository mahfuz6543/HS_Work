// JavaScript Document
$('.jquery > button:first').on('click', () => {
	let replaceTo = !changed ? lorem : lorem2;
	changed = !changed ? true : false;
	$('#bio').html(replaceTo);
});

$('button:eq(5)').on('click', () => {
	alert('Whats up good People!');
});

$('button:eq(6)').on('click', () => {
	let prInput = prompt('What is your name?') || 'kid';
	alert(`Hello ${prInput}!`);
});

$('button:eq(7)').on('click', () => {
	let confResult = confirm('Exit this alert?');
	if (confResult) {
		alert('Okay');
	} else {
		alert('Want to know something more');
	}
});