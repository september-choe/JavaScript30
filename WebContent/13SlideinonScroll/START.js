/*
JavaScript is a single threaded language.
Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
that it stalls the performance of the web page.
In other words, it limits the rate at which a function gets invoked.
 */
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

// querySelectorAll returns a static (not live) list of elements.
const sliderImages = document.querySelectorAll('img');

function checkSlide(e) {
	console.log(e);
	}

window.addEventListener('scroll', debounce(checkSlide));


