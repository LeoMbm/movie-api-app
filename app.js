const input = document.getElementById("search-movies");
const button = document.getElementById("btn-search");

button.addEventListener("click", getInfo);

async function getInfo(e) {
  e.preventDefault();
  const req = await fetch(
    "https://imdb-api.com/en/API/Search/k_9wqf6qog/" + input.value
  );

  const data = await req.json();

  console.log(data);
}
