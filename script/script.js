let windowSize = window.innerWidth;

new Glide('.hero__glide', {
	type: 'slider',
	startAt: 0,
	perView: 1,
	gap: 0,
}).mount()

const newsGlide = new Glide('.news__glide', {
	type: 'slider',
	perView: 4,
	bound: true,
	gap: 20,
	peek: (windowSize - 1320) / 2 + 24,
});

// window.addEventListener('resize', (e) => {
// 	windowSize = e.target.innerWidth;
// 	newsGlide.peek = (windowSize - 1320) / 2 + 24 || 0;
// })

const activityGlide = new Glide('.activity__glide', {
	type: 'slider',
	perView: 3,
	bound: true,
	gap: 20,
	peek: (window.innerWidth - 1320) / 2 + 24,
})

function updatePeekSize() {
	const windowWidth = window.innerWidth;
	newsGlide.update({
		peek: (windowWidth - 1320) / 2 + 24,
	});
	activityGlide.update({
		peek: (windowWidth - 1320) / 2 + 24,
	});
}
updatePeekSize();
window.onresize = updatePeekSize;

newsGlide.mount();
activityGlide.mount();

const nav = document.querySelector('.header__nav');
const nav__logo = document.querySelector('.nav__logo');
const logoVisibleOnScroll = () => {
	if (window.pageYOffset > 160) {
		nav__logo.classList.replace('nav__logo', 'nav__logo--visible')
	} else {
		nav__logo.classList.replace('nav__logo--visible', 'nav__logo')
	}
}
window.addEventListener('scroll', logoVisibleOnScroll);

let missionModal = document.getElementById('mission__modal');
let enrollModal = document.getElementById('enroll__modal');
const buttons = document.getElementsByClassName('button');
const closeButtons = document.getElementsByClassName('modal__closeBtn');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function (e) {
		e.preventDefault();
		if (e.target.name === 'enroll') enrollModal.style.display = 'block';
		if (e.target.name === 'mission') missionModal.style.display = 'block';
	})
}
for (let i = 0; i < closeButtons.length; i++) {
	closeButtons[i].addEventListener('click', function (e) {
		e.preventDefault();
		enrollModal.style.display = 'none';
		missionModal.style.display = 'none';
	})
}
window.onclick = function (e) {
	e.preventDefault();
	if (e.target.id === 'enroll__modal') {
		enrollModal.style.display = 'none';
	}
	if (e.target.id === 'mission__modal') {
		missionModal.style.display = 'none';
	}
}