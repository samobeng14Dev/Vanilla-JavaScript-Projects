const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiUrl = "http://api.quotable.io/random";

async function getQuote() {
	try {
		btnEl.innerText = "Loading...";
		btnEl.disabled = true;
		quoteEl.innerText = "Updating...";
		authorEl.innerText = "Updating...";
		const response = await fetch(apiUrl);
		const data = await response.json();
		const quoteContent = data.content;
		const quoteAuthor = data.author;
		quoteEl.innerText = quoteContent;
		authorEl.innerText = `~ ${quoteAuthor}`;
		btnEl.innerText = "Get a quote";
		btnEl.disabled = false;
	} catch (error) {
		quoteEl.innerText = "An Error happened, try again later";
		authorEl.innerText = "An Error happened";
		btnEl.innerText = "Get a quote";
		btnEl.disabled = false;
	}
}
getQuote();

btnEl.addEventListener("click", getQuote);
