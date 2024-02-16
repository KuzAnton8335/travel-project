const docElem = document.documentElement;
const airPlay = document.createElement('div');

airPlay.style.cssText = `
position:fixed;
width:50px;
height:50px;
right:0;
bottom:0;
// pointer-events:none;
background:url("/img/icons/airplane.svg") center/contain no-repeat;
`

document.body.append(airPlay);

const calcPositionFly = () => {
	const pageHeight = Math.max(docElem.scrollHeight, docElem.clientHeight);
	const windowHeight = docElem.clientHeight;
	const scrollPosition = window.pageYOffset;
	const iconPosition = (scrollPosition / (pageHeight - windowHeight)) * 95;
	airPlay.style.bottom = `${iconPosition}%`;
};

window.addEventListener('scroll', () => {
	requestAnimationFrame(calcPositionFly);
});

calcPositionFly();

