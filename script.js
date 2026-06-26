const jokeElement = document.querySelector("#joke");
const button = document.querySelector("#generate-btn");

async function generateJoke() {
    jokeElement.textContent = "Loading...";

    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch joke.");
        }

        const data = await response.json();

        jokeElement.textContent =
            `${data.setup} ${data.punchline}`;
    } catch (error) {
        jokeElement.textContent =
            "Something went wrong. Please try again.";
    }
}

button.addEventListener("click", generateJoke);