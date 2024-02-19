
const loadData = async () => {
	const result = await fetch("../../data/date.json");
	const data = await result.json();
	return data;
}

loadData();

const renderList = async () => {
	const data = await loadData();
	console.log(data);

	const tourDate = document.querySelector('#tour__date');
	const tourPeople = document.querySelector('#tour__people');

	const dateList = data.map(item => {
		const newOption = document.createElement('option');
		newOption.classList.add('tour__option');
		newOption.value = item.date;
		newOption.innerHTML = `
		${item.date}
		`
		return newOption;
	})
	tourDate.append(...dateList);

	const peopleList = data.map(item => {
		const people = item.min;
		const newOption = document.createElement('option');
		newOption.classList.add('tour__option');
		newOption.value = item.min - people;
		newOption.innerHTML = `
		${people}
		`
		return newOption;
	})

	tourPeople.append(...peopleList);
}

renderList();