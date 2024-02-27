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

export const renderReservation = async () => {
	const data = await loadData();
	// const price = await Promise.all(data.map(async entry => {
	// 	return entry['price'];
	// }))
	const reservationDate = document.querySelector("#reservation__date");
	const reservationPeople = document.querySelector("#reservation__people");
	// const totalCostInfo = document.querySelector(".reservation__price")

	// const updateTotalCost = async () => {
	// 	const selectedDate = reservationDate.value;
	// 	const selectedPeople = reservationPeople.value;
	// 	await loadData();
	// 	const selectedData = data.find(item => item.date === selectedDate);
	// 	const totalCost = selectedData.price * selectedPeople;
	// 	totalCostInfo.textContent = `Total Cost: $${totalCost}`;
	// };

	// reservationDate.addEventListener('change', updateTotalCost);
	// reservationPeople.addEventListener('change', updateTotalCost);


	const reservationList = data.map(item => {
		const option = document.createElement("option");
		option.value = item.date;
		option.textContent = item.date;
		return option;
	});
	reservationDate.append(...reservationList);

	const reservationPeopleList = data.map(item => {
		const option = document.createElement("option");
		option.value = item.date;
		option.textContent = `${item['min-people']} - ${item['max-people']}`;
		return option;
	});
	reservationPeople.append(...reservationPeopleList);
}

renderReservation();