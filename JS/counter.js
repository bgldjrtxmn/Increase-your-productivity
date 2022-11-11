const counters = document.querySelectorAll('.counter');
let readyToDisplay = false;

window.addEventListener('scroll', (event) => {
	if(this.scrollY >= 2153 && !readyToDisplay){
		runCounter();
		readyToDisplay = true;
	}
});


function runCounter(){
	counters.forEach(counter => {
	counter.innerText = '0';
		const updateCounter = () => {
			const target = +counter.getAttribute('data-target');
			const c = +counter.innerText;
			const increment = target / 100;
			if(c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 10)
			} else {
			counter.innerText = target;
		}
	};
	updateCounter();
	});
}