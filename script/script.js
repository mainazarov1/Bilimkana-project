// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';
// $(document).ready(function(){
// 	$("#slider").owlCarousel({
// 		items: 3,
// 		nav: true,
// 		dots: true,
// 		margin: 30,
// 	});
// });
// let slider = $("#slider");
// slider.owlCarousel({
// 	items: 1,
// 	nav: true,
// 	dots: true,
// 	margin: 0,
// 	loop: true,
// 	// mouseDrag: true,
// 	// pullDrag: true,
// 	// touchDrag: true,
// 	// freeDrag: true
// });

// slider.on('mousewheel', '.owl-stage', function (e) {
// 	if (e.deltaY > 0) {
// 		console.log(e.deltaY);
// 		slider.trigger('next.owl');
// 	} else {
// 		slider.trigger('prev.owl');
// 	}
// 	e.preventDefault();
// })

// const swiper = new Swiper('.mySwiper', {
//   // Optional parameters
//   direction: 'gorizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });
// swiper()
// new Swiper(".mySwiper", {
// 	loop: true,
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		dynamicBullets: true,
// 		clickable: true,
// 	}
// });

new Glide('.hero__glide', {
	type: 'slider',
	startAt: 0,
	perView: 1,
	gap: 0,
}).mount()





const newsGlide = new Glide('.news__glide', {
	type: 'slider',
	perView: 4,
	bound: true,
	gap: 20,
	peek: (window.innerWidth - 1320) / 2 + 24,
});



const activityGlide = new Glide('.activity__glide', {
	type: 'slider',
	perView: 3,
	bound: true,
	gap: 20,
	peek: (window.innerWidth - 1320) / 2 + 24,
})
function updatePeekSize() {
  const windowWidth = window.innerWidth;
  newsGlide.update({
    peek: (windowWidth - 1320) / 2 + 24,
	});
	activityGlide.update({
    peek: (windowWidth - 1320) / 2 + 24,
  });
}
updatePeekSize();
window.onresize = updatePeekSize;


newsGlide.mount();
activityGlide.mount()
const nav = document.querySelector('.header__nav');
const nav__logo = document.querySelector('.nav__logo');
const logoVisibleOnScroll = () => {
	if (window.pageYOffset > 160) {
		nav__logo.classList.replace('nav__logo', 'nav__logo--visible')
	} else {
		nav__logo.classList.replace('nav__logo--visible', 'nav__logo')
	}
}
window.addEventListener('scroll', logoVisibleOnScroll);
// document.ready(logoVisibleOnScroll)
// document.onscroll(logoVisibleOnScroll);
$(document).ready(function () {
	// logoVisibleOnScroll();
	// $(window).scroll(logoVisibleOnScroll);

	// if ($(this).scrollTop() > 160) {
	// 	// $('.nav__logo').fadeIn();
	// 	$('.nav__logo').width(223);
	// 	$('.nav__logo').css('display', 'block');
	// } else {
	// 	$('.nav__logo').width(0);
	// 	$('.nav__logo').css('display', 'none');

	// }
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 160) {
	// 		// $('.nav__logo').fadeIn();
	// 		$('.nav__logo').width(223);
	// 		$('.nav__logo').css('display', 'block');
	// 	} else {
	// 		$('.nav__logo').width(0);
	// 		$('.nav__logo').css('display', 'none');
	// 	}
	// });
});