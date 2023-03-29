const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "Y3z2ONivuU72wIkxi8Somg==sIMCjxHevb4sOyxj";
const options = {
	method: "GET",
	headers: {
		"X-Api-Key": apiKey,
	},
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
	try {
		//set button = loading and text = Updating
		jokeEl.innerText = "Updating...";
		btnEl.disabled = true;
		btnEl.innerText = "Loading...";

		const response = await fetch(apiURL, options);
		const data = await response.json();

		// return button to normal after getting the joke
		btnEl.disabled = false;
		btnEl.innerText = "Tell me a joke";

		jokeEl.innerText = data[0].joke;
	} catch (error) {
		jokeEl.innerText = "an error occured, try again later";
		btnEl.disabled = false;
		btnEl.innerText = "Tell me a joke";
	}
}

btnEl.addEventListener("click", getJoke);
