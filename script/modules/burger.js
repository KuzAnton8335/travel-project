
const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');

menuButton.addEventListener('click', () => {
	menu.classList.toggle('header__menu_active');
});

document.addEventListener('click', (event) => {
	if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
		menu.classList.remove('header__menu_active');
	}
});

menu.addEventListener('click', (event) => {
	if (event.target.classList.contains('header__link')) {
		menu.classList.remove('header__menu_active');
	}
});