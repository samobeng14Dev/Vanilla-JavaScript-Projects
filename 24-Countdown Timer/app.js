const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const giveawayEl = document.querySelector(".giveaway");
const deadlineEl = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2023, 4, 2, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];

giveawayEl.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
	const today = new Date().getTime();
	const t = futureTime - today;
	// 1s = 100ms 1m = 60sec 1hr = 60min 1day = 24hrs

	// values in ms
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	//calculate all values
	let days = Math.floor(t / oneDay);

	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);

	//setvalues array
	const values = [days, hours, minutes, seconds];

	// adding zero to a single digit
	const format = (item) => {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	};

	items.forEach((item, index) => {
		item.innerHTML = format(values[index]);
	});

	// check if current time is bigger than future time
	if (t < 0) {
		clearInterval(countdown);
		deadlineEl.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
	}
};

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
