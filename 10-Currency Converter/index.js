const currencyFirstEl = document.getElementById("currency-first");

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
