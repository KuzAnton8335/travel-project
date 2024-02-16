
const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');
const duration = 1000;
const distance = 500;
const easeInOut = time => 0.5 * (1 - Math.cos(time * Math.PI));
let requestId = NaN;

const startAnimation = (duration, callback) => {
	let startAnimation = NaN;
	requestId = requestAnimationFrame(function step(timestamp) {
		startAnimation ||= timestamp;
		const progress = (timestamp - startAnimation) / duration;
		callback(progress);
		if (progress < 1) {
			requestId = requestAnimationFrame(step);
		}
	})
}

menuButton.addEventListener('click', () => {
	startAnimation(duration, (progress) => {
		const left = easeInOut(progress) * distance;
		menu.classList.toggle('header__menu_active');
	})
});

document.addEventListener('click', (event) => {
	if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
		startAnimation(duration, (progress) => {
			const left = easeInOut(progress) * distance;
			menu.classList.remove('header__menu_active');
		})

	}
});

menu.addEventListener('click', (event) => {
	if (event.target.classList.contains('header__link')) {
		startAnimation(duration, (progress) => {
			const left = easeInOut(progress) * distance;
			menu.classList.remove('header__menu_active');
		})
	}
});