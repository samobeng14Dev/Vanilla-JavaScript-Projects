const currencyFirstEl = document.getElementById("currency-first");
const currencySearchEl = document.getElementById("currency-search");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

const updateRate = async () => {
	const url = `https://v6.exchangerate-api.com/v6/f6f7790e14ce41d6af3cf4e2/latest/${currencyFirstEl.value}`;
	const response = await fetch(url);
	const data = await response.json();
	const rate = data.conversion_rates[currencySecondEl.value];
	exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
	worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
};

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);

// Dynamically populate curren,cy options
const populateCurrencyOptions = async () => {
	const url =
		"https://v6.exchangerate-api.com/v6/f6f7790e14ce41d6af3cf4e2/latest/USD";
	const response = await fetch(url);
	const data = await response.json();
	const currencies = Object.keys(data.conversion_rates);

	currencies.forEach((currency) => {
		const option = document.createElement("option");
		option.value = currency;
		option.text = currency;
		currencyFirstEl.appendChild(option);
	});
};

// Filter currency options based on search input
const filterCurrencyOptions = () => {
	const searchValue = currencySearchEl.value.toLowerCase();
	const options = currencyFirstEl.options;

	for (let i = 0; i < options.length; i++) {
		const option = options[i];
		const currency = option.text.toLowerCase();

		if (currency.includes(searchValue)) {
			option.style.display = "block";
		} else {
			option.style.display = "none";
		}
	}
};

populateCurrencyOptions();
currencySearchEl.addEventListener("input", filterCurrencyOptions);
