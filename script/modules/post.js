const URL = "https://jsonplaceholder.typicode.com/posts";

// проверочная фнкция при fetch запросе
const fetchRequest = async (url, {
	method = "GET",
	callback,
	body,
	headers,
}) => {
	try {
		const options = {
			method,
		};
		if (body) options.body = JSON.stringify(body);
		if (headers) options.headers = headers;
		const response = await fetch(url, options);
		if (response.ok) {
			const data = await response.json();
			if (callback) callback(null, data);
			return;
		}
		throw new Error(response.statusText);
	} catch (err) {
		callback(err);
	}
}

const reservationForm = document.querySelector(".reservation__form");
reservationForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(reservationForm);
	const body = Object.fromEntries(formData.entries());
	fetchRequest(URL, {
		method: "POST",
		body,
		headers: {
			"Content-Type": "application/json:charset=utf-8",
		},
		callback: (err, data) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(data);
			reservationForm.textContent = `Заявка успешно отправлена. ID: ${data.id}`;
		},
	});
})

const footerForm = document.querySelector(".footer__form");
console.log(footerForm);
footerForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(footerForm);
	const body = Object.fromEntries(formData.entries());
	fetchRequest(URL, {
		method: "POST",
		body,
		headers: {
			"Content-Type": "application/json:charset=utf-8",
		},
		callback: (err, data) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(data);
			footerForm.innerHTML = `
			<h2>Заявка успешно отправлена.</h2>
			<span>Наши менеджеры свяжутся с<br/> вами в течение 3-х рабочих дней</span>`;
		},
	});
})
