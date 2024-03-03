const loadData = async () => {
	const result = await fetch("../../data/date.json");
	const data = await result.json();
	return data;
}

const newLoadData = async () => {
	const result = await fetch("../../data/date.json");
	const data = await result.json();
	const date = new Date(data.date);
	const options = { day: 'numeric', month: 'long' };
	const formattedDate = date.toLocaleDateString('ru-RU', options);
	return formattedDate;
}

const renderForm = async () => {
	const data = await loadData();
	const tourDate = document.querySelector("#tour__date");
	const tourPeople = document.querySelector("#tour__people");

	const dataList = data.map(item => {
		const option = document.createElement("option");
		option.classList.add("tour__option");
		option.value = item.date;
		option.textContent = item.date;
		return option;
	});
	tourDate.append(...dataList);

	const dataPeople = data.map(item => {
		const option = document.createElement("option");
		option.classList.add("tour__option");
		option.value = item.date;
		option.textContent = `${item['min-people']} - ${item['max-people']}`;
		return option;
	});
	tourPeople.append(...dataPeople);
}
renderForm();

export let formData;

export const renderReservation = async () => {
	const data = await loadData();

	const reservationForm = document.querySelector(".reservation__form");
	const reservationPrice = reservationForm.querySelector(".reservation__price");
	const reservationData = reservationForm.querySelector(".reservation__data");
	const reservationDate = document.querySelector("#reservation__date");
	const reservationPeople = document.querySelector("#reservation__people");

	for (let i = 0; i < reservationDate.options.length; i++) {
		if (i <= 4) {
			reservationDate.options[i].disabled = true;
		}
	}
	for (let i = 0; i < reservationPeople.options.length; i++) {
		if (i <= 6) {
			reservationPeople.options[i].disabled = true;
		}
	}

	const updateCost = () => {
		const selectedDate = reservationDate.value;
		const selectedPeople = reservationPeople.value;
		// const sumPeople = data.find((item) => item.date === selectedDate)['max-people'] - data.find((item) => item.date === selectedDate)['min-people'];
		const sumPeople = data.find(value => value)['max-people'] - data.find(value => value)['min-people'];

		const selectedItem = data.find((item) => item.date === selectedDate);
		const pricePerPerson = selectedItem.price;
		const totalCost = pricePerPerson;//* sumPeople
		reservationPrice.textContent = `${totalCost} ₽`;
		reservationData.textContent = `${selectedDate}, ${selectedPeople} человек`;

		formData = {
			selectedDate: reservationDate.value,
			selectedPeople: reservationPeople.value,
			totalCost: totalCost,
			reservationForm: reservationForm,
		}
	};

	reservationDate.addEventListener("change", updateCost);
	reservationPeople.addEventListener("change", updateCost);

	const reservationList = data.map(item => {
		const option = document.createElement("option");
		option.classList.add("tour__option");
		option.value = item.date;
		option.textContent = item.date;
		return option;
	});
	reservationDate.append(...reservationList);

	const reservationPeopleList = data.map(item => {
		const option = document.createElement("option");
		option.classList.add("tour__option");
		option.value = `${item['min-people']} - ${item['max-people']}`;
		option.textContent = `${item['min-people']} - ${item['max-people']}`;
		return option;
	});
	reservationPeople.append(...reservationPeopleList);
}

renderReservation();