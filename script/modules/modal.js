import loadStyle from "./loadStyles.js";


const showModal = async (err, data) => {
	await loadStyle("css/modal.css");
	const overlay = document.createElement('div');
	const modalWindow = document.createElement('div');
	const title = document.createElement('h2');
	const modalText1 = document.createElement('p');
	const modalText2 = document.createElement('p');
	const modalText3 = document.createElement('p');
	const modalButton = document.createElement('div');
	const modalBtnConfirm = document.createElement('button');
	const modalBtnEdit = document.createElement('button');

	overlay.classList.add('overlay', 'overlay_confirm');
	modalWindow.classList.add("modal");
	title.classList.add("modal__title");
	title.textContent = "Подтверждение заявки";
	modalText1.classList.add("modal__text");
	modalText1.textContent = `Бронирование путешествия в Индию на человек`;
	modalText2.classList.add("modal__text");
	modalText2.textContent = `В даты:${data.date}`;
	modalText3.classList.add("modal__text");
	modalText3.textContent = `Стоимость тура 459 588₽`;
	modalButton.classList.add("modal__button");
	modalBtnConfirm.classList.add("modal__btn", "modal__btn_confirm");
	modalBtnConfirm.textContent = "Подтверждаю";
	modalBtnEdit.classList.add("modal__btn", "modal__btn_edit");
	modalBtnEdit.textContent = "Изменить данные";

	overlay.append(modalWindow);
	modalButton.append(modalBtnConfirm, modalBtnEdit);
	modalWindow.append(title, modalText1, modalText2, modalText3, modalButton);
	document.body.append(overlay);

	return new Promise((resolve) => {
		modalBtnConfirm.addEventListener("click", () => {
			overlay.remove();
			resolve(true);
		})
		modalBtnEdit.addEventListener("click", () => {
			overlay.remove();
			resolve(false);
		})
	})

}

export default showModal;