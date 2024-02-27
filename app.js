const jokeBtn = document.querySelector("#jokeBtn");
const jokes = document.querySelector(".jokes");

jokeBtn.addEventListener("click", async () => {
  let jokeUrl = "https://official-joke-api.appspot.com/random_joke";
  try {
    const request = await fetch(jokeUrl);
    const response = await request.json();

    let newJoke = document.createElement("li");
    newJoke.textContent = `${response.setup} ${response.punchline}`;
    jokes.appendChild(newJoke);
  } catch (error) {
    alert("Sorry, Jamon Jokes are not available at the moment!");
  }
  jokes.value = "";
});
