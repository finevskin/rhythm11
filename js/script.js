"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Параметры
		autoHeight: true,
		loop: true,
		// Если нужна пагинация
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}