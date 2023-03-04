// import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
// import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';

// const dayjs = require("dayjs");

// const VanillaCalendar = require('@uvarov.frontend/vanilla-calendar');


// cal.appendChild(calendar);
// const dayjs = require('dayjs')
// import dayjs from 'dayjs' // ES 2015
// const isoWeek = require('dayjs/plugin/isoWeek')
// const dayjs = require("dayjs");

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


let windowSize = window.innerWidth;

const newsGlide = new Glide('.news__glide', {
	type: 'slider',
	perView: 4,
	bound: true,
	gap: 20,
	peek: (windowSize - 1320) / 2 + 24,
});
window.addEventListener('resize', (e) => {
	windowSize = e.target.innerWidth;
	newsGlide.peek = (windowSize - 1320) / 2 + 24 || 0;
	console.log(windowSize);
	console.log(newsGlide.peek);
})
console.log(windowSize);


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


let missionModal = document.getElementById('mission__modal');
// let missionModalClose = document.getElementById('mission__modal-close');
// let missionModalOpen = document.querySelectorAll('button');
let enrollModal = document.getElementById('enroll__modal');
// // let missionModalClose = document.getElementById('mission__modal-close');
// // let missionModalOpen = document.getElementById('mission__modal-open');
// function handleClick(event) {
// 	event.preventDefault();
// }
// missionModalOpen.onclick = function (e) { 
// 	e.preventDefault();
// 	if (e.target.name === 'enroll') enrollModal.style.display = 'block';
// 	if (e.target.name === 'mission') missionModal.style.display = 'block';
// 	// missionModal.style.display = 'block';
// }
// missionModalClose.onclick = function (e) { 
// 	e.preventDefault();
// 	if (e.target.name === 'enroll') enrollModal.style.display = 'none';
// 	if (e.target.name === 'mission') missionModal.style.display = 'none';
// 	// missionModal.style.display = 'none';
// }
// window.onclick = function (e) {
// 	if(e.target == missionModal) missionModal.style.display = 'none';
// }
const buttons = document.getElementsByClassName('button');
const closeButtons = document.getElementsByClassName('modal__closeBtn');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function (e) {
		e.preventDefault();
		if (e.target.name === 'enroll') enrollModal.style.display = 'block';
		if (e.target.name === 'mission') missionModal.style.display = 'block';
	})
}
for (let i = 0; i < closeButtons.length; i++) {
	closeButtons[i].addEventListener('click', function (e) {
		e.preventDefault();
		enrollModal.style.display = 'none';
		missionModal.style.display = 'none';
	})
}
window.onclick = function (e) {
	e.preventDefault();
	if (e.target.id === 'enroll__modal') {
		enrollModal.style.display = 'none';
	}
	if (e.target.id === 'mission__modal') {
		missionModal.style.display = 'none';
	}
}



const weeks = (monthIndex) => {
	let rows = 1
	// dayjs.extend(dayjs().isoWeek())
	let now = dayjs(new Date(2023, monthIndex, 1));
	// First row
	let firstWeekDays = 7 - now.startOf('month').isoWeekday();
	let rest = now.daysInMonth() - (firstWeekDays === 0 ? 7 : firstWeekDays);
	// Middle rows
	let middleRows = Math.floor(rest / 7);
	rows = rows + middleRows;
	rest -= Math.floor(middleRows * 7);
	// Last row?
	if (rest > 0) {
		rows = rows + 1;
	}
	return rows
}

const getMonth = (month = dayjs(new Date()).month()) => {
	let rowsOfMonth = weeks(month);
	month = Math.floor(month);
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(rowsOfMonth).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount)).locale('ky_KG');
		});
	});
	return daysMatrix;
}


const calendarOfMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// const calendarItem = document.querySelector('.calendar__item');
function createCalendarItem(events, month) {
	const calendarItem = document.createElement('li');
	calendarItem.classList.add('glide__slide');
	let eventsList = ''
	console.log(dayjs().month(month));
	events.forEach(event => {
		eventsList += `<li class="month__item">
				<span>${dayjs(event.date).date()}</span><p>${event.title}</p>
			</li>
			`
	})
	// ${createCalendar({month, events})}
	calendarItem.innerHTML = `
	<div class="calendar__item">
	
	<div id='calendar${month}'></div>
	</div>
	`;
	// <hr />
	// <ul class="month__list">
	// ${eventsList}
	
	// </ul>
	return calendarItem;
}

const calendarGlideContainer = document.querySelector('.calendar__glide');
const calendarContainer = calendarGlideContainer.querySelector('.glide__track');

function createCalendarList(events) {
	const calendarMonth = document.createElement('ul');
	calendarMonth.classList.add('glide__slides');
	// let calendar = ''
	calendarOfMonth.forEach(month => {
		const eventsList = events.filter(event => month === dayjs(event.date).month()).sort((a, b) => dayjs(a.date).date() - dayjs(b.date).date());
		calendarMonth.appendChild(createCalendarItem(eventsList, month));
	})
	// calendarMonth.innerHTML = calendar;
	console.log(calendarMonth);
	return calendarMonth;
}
const url = 'https://5e5729044c695f001432f9ce.mockapi.io/api/events';
async function fetchEvents() {
	try {
		const response = await fetch(url)
			.then((response) => response.json())
			.catch((error) => console.log(error));
		console.log(response);
		return response;
	} catch (error) {
		alert(error.message)
	}
}
const today = new Date().getMonth();
async function renderEvents() {

	let events = await fetchEvents();
	// createCalendarList(events)
	calendarContainer.appendChild(createCalendarList(events))
	const calendarGlide = new Glide('.calendar__glide', {
		type: 'slider',
		perView: 3,
		bound: true,
		gap: 20,
		startAt: today,
		peek: (window.innerWidth - 1320) / 2 + 24,
	})
	calendarGlide.mount()
	console.log('render');
	// const today = new Date().getMonth();
	console.log(events);
	calendarOfMonth.forEach(month => {
		const calendar = new VanillaCalendar(`#calendar${month}`, {
			CSSClasses: {
				calendar: 'vanilla-calendar',
				header: 'vanilla-calendar-header',
				headerContent: 'vanilla-calendar-header__content',
				days: 'vanilla-calendar-days',
			},
			DOMTemplates: {
				default: `
			<div class="vanilla-calendar-header">
				<div class="vanilla-calendar-header__content">
					<#Month />
					<#Year />
				</div>
			</div>
			<hr></hr>
			<div class="vanilla-calendar-wrapper">
				<div class="vanilla-calendar-content">
					<#Week />
					<#Days />
				</div>
				</div>
			<hr></hr>

				<div class="vanilla-calendar-footer">
				<ul class="vanilla-calendar-events">
					${events.filter(event => (month === dayjs(event.date).month() && dayjs().year() === dayjs(event.date).year())).sort((a, b) => dayjs(a.date).date() - dayjs(b.date).date()).map(event => `<li class="vanilla-calendar-event" data-date="${dayjs(event.date).format('YYYY-MM-DD')}"><span>${dayjs(event.date).date()}</span><p>${event.title}</p></li>`).join('')}
				</ul>
				</div>
		`
			},
			settings: {
				lang: 'ru',
				selection: {
					day: false,
					month: false,
					year: false,
				},
				visibility: {
					weekend: false,
					daysOutside: false,
				},
				selected: {
					dates: ['2022-01-09:2022-01-13', '2022-01-22'],
					month: month,
					year: 2023,
				},
			},

		});
		calendar.init();
		const cal = document.getElementById(`calendar${month}`);
	});
}
renderEvents()
console.log(dayjs().year() === dayjs("2023-06-05T07:16:43.924Z").year());
// const calendar = new VanillaCalendar(`#calendar`, {
// 	month: 2,
// 	settings: {
// 		lang: 'ru',
// 		selection: {
// 			day: false,
// 			month: false,
// 		},
// 		visibility: {
// 			weekend: false,
// 			daysOutside: false,
// 		},
// 		selected: {
// 			dates: ['2023-02-10', '2023-02-12', '2022-08-13'],
// 		},
// 	}
// });
// calendar.init();
// const cal = document.getElementById(`calendar`);
// function createDay({day, month, event}) {
// 	let dayView = document.createElement('div');
// 	dayView.classList.add('day');
// 	dayView.innerHTML = `
// 		<div class="day__number">${day}</div>
// 	`
// 	return day;
// }

// function getMonthMatrix(year, month) {
//   const numDaysInMonth = new Date(year, month, 0).getDate();
//   const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

//   const matrix = [];

//   let day = 1;
//   for (let i = 0; i < 5; i++) {
//     const row = [];
//     for (let j = 0; j < 7; j++) {
//       if (i === 0 && j < firstDayOfMonth) {
//         row.push(null);
//       } else if (day > numDaysInMonth) {
//         row.push(null);
//       } else {
//         const date = new Date(year, month - 1, day);
//         row.push(dayjs(date).date());
//         day++;
//       }
//     }
//     matrix.push(row);
//   }
// 	console.log(matrix);
//   return matrix;
// }

// function createCalendar({month, event}) {
// 	const calendar = document.createElement('div');
// 	calendar.classList.add('calendar__view');
// 	const monthArr = getMonthMatrix(2023, month);
// 	// `flex-1 h-5/6 grid grid-cols-7 grid-rows-${month}`
// 	return monthArr.map((row, i) => {
// 		return row.map((day, idx) => (
// 			createDay({day, month, event})
// 		))
// 	})
// 	// return (
// 	// 	<div className={`flex-1 h-5/6 grid grid-cols-7 grid-rows-${month}`}>
// 	// 		{month.map((row, i) => (
// 	// 			<React.Fragment key={i}>
// 	// 				{row.map((day, idx) => (
// 	// 					<Day day={day} key={idx} weeks={month.length}
// 	// 					/>
// 	// 				))}
// 	// 			</React.Fragment>
// 	// 		))}
// 	// 	</div>
// 	// )
// }

// const day = dayjs().format()
// console.log(day);

// calendar.innerHTML = `
// 	<div class="calendar__item">
// 		<p>${}</p>
// 		</hr>

// 	</div>
// `;
// const calendar = document.querySelector('.calendar');
// calendar.querySelectorAll('.calendar__item').forEach(item => {
// 	console.log(item);
// })

// const calendarSlides = document.querySelectorAll('.glide__slide');
// function createCalendar() {
// 	console.log(calendarSlides);
// 	calendarSlides.forEach((month,i) => {
// 		month.innerHTML = `
// 			<li class="glide__slide">
// 				<div class="calendar__item">
// 					<p>${i}</p>
// 					</hr>
// 				</div>
// 			</li>
// 		`;
// 	})
// }
// createCalendar();
// Loop through each month and create the calendar view
// calendarMonth.forEach(sliderMonth => {
// 	const calendar = document.createElement('div');

// 	const date = new Date();
// 	date.setMonth(calendarDays.indexOf('Sun'), 1); // Set the date to the first Sunday of the month
// 	date.setMonth(date.getMonth() + sliderMonths.indexOf(sliderMonth)); // Set the month based on the index of the slider month
// 	const month = date.getMonth();
// 	const year = date.getFullYear();

// 	// Create the header row of the calendar
// 	const headerRow = document.createElement('div');
// 	headerRow.classList.add('calendar-row', 'header-row');
// 	calendarDays.forEach(day => {
// 		const dayCell = document.createElement('div');
// 		dayCell.classList.add('calendar-cell', 'header-cell');
// 		dayCell.textContent = day;
// 		headerRow.appendChild(dayCell);
// 	});
// 	calendar.appendChild(headerRow);

// 	// Create the calendar days
// 	while (date.getMonth() === month) {
// 		const calendarRow = document.createElement('div');
// 		calendarRow.classList.add('calendar-row');
// 		for (let i = 0; i < 7; i++) {
// 			const calendarCell = document.createElement('div');
// 			calendarCell.classList.add('calendar-cell');
// 			if (date.getMonth() !== month) {
// 				calendarCell.classList.add('disabled-cell');
// 			} else {
// 				calendarCell.textContent = date.getDate();
// 				if (date.getDay() === 0 || date.getDay() === 6) {
// 					calendarCell.classList.add('weekend-cell');
// 				}
// 			}
// 			calendarRow.appendChild(calendarCell);
// 			date.setDate(date.getDate() + 1);
// 		}
// 		calendar.appendChild(calendarRow);
// 	}
// });

// // Set the initial position of the slider
// let sliderPosition = 0;
// updateSliderPosition();

// // Add event listeners for the slider navigation buttons
// const prevButton = document.createElement('button');
// prevButton.textContent = '<';
// prevButton.addEventListener('click', () => {
// 	if (sliderPosition > 0) {
// 		sliderPosition--;
// 		updateSliderPosition();
// 	}
// });
// slider.insertBefore(prevButton, sliderMonths[0]);

// const nextButton = document.createElement('button');
// nextButton.textContent = '>';
// nextButton.addEventListener('click', () => {
// 	if (sliderPosition < sliderMonths.length - 1) {
// 		sliderPosition++;
// 		updateSliderPosition();
// 	}
// });
// slider.appendChild(nextButton);

// // Update the position of the slider and hide/show the navigation buttons as needed
// function updateSliderPosition() {
// 	sliderMonths.forEach((sliderMonth, index) => {
// 		sliderMonth.style.transform = `translateX(${(index - sliderPosition) * slider.offsetWidth}px)`;
// 		if (index === 0) {
// 			prevButton.style.display = sliderPosition === 0 ? 'none' : '';
// 		}
// 		if (index === sliderMonths.length - 1) {
// 			nextButton.style.display = sliderPosition === sliderMonths.length - 1 ? 'none' : '';
// 		}
// 	});
// }
