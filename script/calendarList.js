const calendarOfMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
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
	calendarItem.innerHTML = `
		<div class="calendar__item">
		<div id='calendar${month}'></div>
		</div>
	`
	return calendarItem;
}

const calendarGlideContainer = document.querySelector('.calendar__glide');
const calendarContainer = calendarGlideContainer.querySelector('.glide__track');

function createCalendarList(events) {
	const calendarMonth = document.createElement('ul');
	calendarMonth.classList.add('glide__slides');
	calendarOfMonth.forEach(month => {
		const eventsList = events.filter(event => month === dayjs(event.date).month()).sort((a, b) => dayjs(a.date).date() - dayjs(b.date).date());
		calendarMonth.appendChild(createCalendarItem(eventsList, month));
	})
	return calendarMonth;
}
const url = 'https://5e5729044c695f001432f9ce.mockapi.io/api/events';
async function fetchEvents() {
	try {
		const response = await fetch(url)
			.then((response) => response.json())
			.catch((error) => console.log(error));
		return response;
	} catch (error) {
		alert(error.message)
	}
}
const today = new Date().getMonth();
async function renderEvents() {
	const events = await fetchEvents();
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
	});
}
renderEvents()