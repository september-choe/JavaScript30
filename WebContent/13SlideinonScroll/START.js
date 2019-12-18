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
	sliderImages.forEach(sliderImage => {
		// window.scrollY returns the number of pixels that the document is currently scrolled vertically
		// window.innerHeight means height of the browser window viewport excluding browser frame (https://sometimes-n.tistory.com/22)
		const slideInAt = window.scrollY + window.innerHeight;
		const imageBottom = (sliderImage.offsetTop + sliderImage.height) - (sliderImage.height/2);
		// The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if (isHalfShown && isNotScrolledPast){
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
		
	})
}

window.addEventListener('scroll', debounce(checkSlide));


