// ==================
//  toggle Fadein
// ==================

const links = document.querySelectorAll('.table a');
let canChange = false;
let alreadyChanged = false;
let isAnimOn = localStorage.getItem('isAnimOn') || 'true';
let isDarkOn = localStorage.getItem('isDarkOn') || 'false';

toggleAnimation();

function toggleAnimation() {
	if ((canChange && !alreadyChanged) || isAnimOn !== 'true') {
		for (let i = 0; i < links.length; i++) {
			links[i].style.setProperty('opacity', '1');
			links[i].classList.toggle('firstAnimation');
			alreadyChanged = true;
			val = 4;
			if (i < val) {
				links[i].classList.toggle('row-1');
			} else if (i < val * 2) {
				links[i].classList.toggle('row-2');
			} else if (i < val * 3) {
				links[i].classList.toggle('row-3');
			} else if (i < val * 4) {
				links[i].classList.toggle('row-4');
			} else if (i < val * 5) {
				links[i].classList.toggle('row-1');
			} else if (i < val * 6) {
				links[i].classList.toggle('row-2');
			} else if (i < val * 7) {
				links[i].classList.toggle('row-3');
			} else if (i < val * 8) {
				links[i].classList.toggle('row-4');
			}
		}
	} else if (!alreadyChanged) {
		canChange = true;
		setTimeout(toggleAnimation, 7000);
	}
}

// ==================
//  movement control
// ==================

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const tables = document.querySelectorAll('.table');
let currentSide = 0;

rightArrow.addEventListener('click', () => {
	toggleSides();
});
leftArrow.addEventListener('click', () => {
	toggleSides();
});

const toggleSides = () => {
	leftArrow.classList.toggle('visible');
	rightArrow.classList.toggle('visible');

	if (currentSide === 0) {
		tables[0].style.left = '0%';
		tables[1].style.left = '50%';
		tables[0].style.setProperty('pointer-events', 'none', 'important');
		tables[1].style.setProperty('pointer-events', 'initial', 'important');
		tables[0].style.opacity = '0';
		tables[1].style.opacity = '1';
		currentSide = 1;
	} else if (currentSide === 1) {
		tables[0].style.left = '50%';
		tables[1].style.left = '100%';
		tables[0].style.setProperty('pointer-events', 'initial', 'important');
		tables[1].style.setProperty('pointer-events', 'none', 'important');
		tables[0].style.opacity = '1';
		tables[1].style.opacity = '0';
		currentSide = 0;
	}
};

// ==================
//  Settings Control
// ==================

// Variables
const gear = document.querySelector('.gear');
const settings = document.querySelector('.settings');
const switches = document.querySelectorAll('.switch');
const sliders = document.querySelectorAll('.slider');
const box1 = document.querySelector('.top');
const box2 = document.querySelector('.middle');
const box3 = document.querySelector('.bottom');
const paths = document.querySelectorAll('svg path');
const elements = [ box1, box2, box3 ];

// Add paths to elements
for (let i = 0; i < paths.length; i++) {
	elements.push(paths[i]);
}

//Event Listeners
gear.addEventListener('click', () => {
	settings.classList.toggle('closed');
});

switches[0].addEventListener('click', () => {
	switches[0].classList.toggle('clr-enabled');
	sliders[0].classList.toggle('enabled');
	changeAnimStatus();
});

switches[1].addEventListener('click', () => {
	switches[1].classList.toggle('clr-enabled');
	sliders[1].classList.toggle('enabled');
	document.body.classList.toggle('dark-mode');
	changeDarkStatus();
});

// Functions

const changeAnimStatus = () => {
	if (isAnimOn === 'true') {
		localStorage.setItem('isAnimOn', 'false');
	} else if (isAnimOn !== 'true') {
		localStorage.setItem('isAnimOn', 'true');
	}
};

const changeDarkStatus = () => {
	if (isDarkOn === 'false') {
		localStorage.setItem('isDarkOn', 'true');
	} else if (isDarkOn !== 'false') {
		localStorage.setItem('isDarkOn', 'false');
	}
};

// Check current status on page load and change the styling accordingly

if (isAnimOn === 'true') {
	for (let i = 0; i < elements.length; i++) {
		elements[i].classList.remove('disableAnim');
		switches[0].classList.remove('clr-enabled');
		sliders[0].classList.remove('enabled');
	}
} else if (isAnimOn !== 'true') {
	for (let i = 0; i < elements.length; i++) {
		elements[i].classList.add('disableAnim');
		switches[0].classList.add('clr-enabled');
		sliders[0].classList.add('enabled');
	}
}

if (isDarkOn === 'false') {
	switches[1].classList.remove('clr-enabled');
	sliders[1].classList.remove('enabled');
	document.body.classList.remove('dark-mode');
} else if (isDarkOn !== 'false') {
	switches[1].classList.add('clr-enabled');
	sliders[1].classList.add('enabled');
	document.body.classList.add('dark-mode');
}
