const travelItem = document.querySelectorAll(".travel__item");
const travelItemTitle = document.querySelectorAll(".travel__item-title");
const travelItemTextWrapper = document.querySelectorAll(".travel__item-text-wrapper");
console.log(travelItemTitle);

let heightWrapper = 0;

travelItemTextWrapper.forEach(elem => {
	if (heightWrapper < elem.scrollHeight) {
		heightWrapper = elem.scrollHeight;
	}
})

travelItemTitle.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		for (let i = 0; i < travelItem.length; i += 1) {
			if (index === i) {
				travelItemTextWrapper[i].style.height = travelItem[i].classList.contains("item_active") ? '' : `${heightWrapper}px`
				travelItem[i].classList.toggle('item_active');
			} else {
				travelItem[i].classList.remove('item_active');
				travelItemTextWrapper[i].style.height = '';
			}
		}
	})
})