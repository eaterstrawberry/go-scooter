const swiper = new Swiper('.slider-events-content', {
	// Optional parameters
	loop: false,
	breakpoints: {
		320: {
			slidesPerView: 1,
			enabled: true
		},
		768: {
			slidesPerView: 2,
			enabled: true
		},
		991: {
			enabled: false
		}
	},
	// Navigation arrows
	navigation: {
	  nextEl: '.events-content__arrow.swiper-button-next',
	  prevEl: '.events-content__arrow.swiper-button-prev',
	},
 });