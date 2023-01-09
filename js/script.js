const circle = document.querySelector('.progres-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const input = document.querySelector('.percent')

input.addEventListener('input', () => {
	setProgress(input.value)
	numberChange(input.value)
})

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
	const offset = circumference - percent / 100 * circumference;
	circle.style.strokeDashoffset = offset;
	console.log(input.value)
}

function numberChange (percent) {
	const number = document.querySelector('.number')
	number.innerHTML = percent + '%'
}