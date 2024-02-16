
const timerElement = document.querySelector('.timer');
const deadline = new Date(2024, 2, 25, 0, 0, 0);
console.log(deadline);


const countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {

	const now = new Date().getTime();


	const distance = (deadline - now) / 1000;
	const days = Math.floor((distance / 60 / 60 / 24 % 30));
	const hours = Math.floor((distance / 60 / 60) % 24);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));


	timerElement.querySelector('.timer__count_days').textContent = formatNumber(days);
	timerElement.querySelector('.timer__count_hours').textContent = formatNumber(hours);
	timerElement.querySelector('.timer__count_minutes').textContent = formatNumber(minutes);
	timerElement.querySelector('.timer__units_days').textContent = declOfNum(days, ['день', 'дня', 'дней']);
	timerElement.querySelector('.timer__units_hours').textContent = declOfNum(hours, ['час', 'часа', 'часов']);
	timerElement.querySelector('.timer__units_minutes').textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);


	if (distance <= 0) {

		timerElement.style.display = 'none';

	}
}

function formatNumber(number) {
	return number < 10 ? '0' + number : number;
}

let declOfNum = function (number, titles) {
	return titles[number % 10 === 1 && number % 100 !== 11 ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2];
}





