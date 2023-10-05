// JavaScript Document
let changed = false;
const bio = document.querySelector('#bio');
const lorem = 'I am Mahfuzul Islam, from the Web Design Academy. I goes to Information Technology High School. Now I am a senior, which is really something to be proud of. The reason I am in this web design academy is mainly because I want learn about computer science, which I'm also planning to take in college. Computer science has the position mostly everywhere in the world and the job opportunity is growing very rapidly. For me personally, programming is fun when I finally solve any problems, but when I get stuck I don't feel like to continue anymore.



In my free time I usually love to play video games and play soccer in the field.  My dream was to become an aeronautical engineering but it seems I wont be able to fulfill it but I would love to work for any aircraft company.';

const changeBio = () => {
	let repalceTo = !changed ? lorem : lorem2;
	changed = !changed ? true : false;
	bio.innerHTML = repalceTo;
};
const showPrompt = () => {
	let prInput = prompt('What is your name?') || 'kid';
	alert(`Hello ${prInput}!`);
};

const showConfirm = () => {
	let confResult = confirm('Exit this alert?');
	if (confResult) {
		alert('Okay');
	} else {
		alert('Want to know something more');
	}
};