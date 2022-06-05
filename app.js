const input = document.getElementById("search-movies");
const button = document.getElementById("btn-search");
const container = document.getElementById("container");
const main = document.getElementById("main");

button.addEventListener("click", getInfo);

button.addEventListener("click", () => {
  container.innerHTML = "";
});

async function getInfo(e) {
  e.preventDefault();

  let req = await fetch(
    "https://imdb-api.com/en/API/Search/k_9wqf6qog/" + input.value
  );
  input.value = "";

  const data = await req.json();
  displayResults(data);
}

function displayResults(data) {
  const res = data.results;
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    let div = document.createElement("div");
    div.className =
      "mx-auto flex w-60 flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60";
    let img = document.createElement("img");
    img.className =
      "aspect-video w-60 rounded-t-2xl object-cover object-center";
    let div2 = document.createElement("div");
    div2.className = "p-4";
    let small = document.createElement("small");
    small.className = "text-blue-400 text-xs";
    let title = document.createElement("h1");
    title.className = "text-2xl font-medium text-slate-600 pb-2";
    let desc = document.createElement("p");
    desc.className =
      "text-sm tracking-tight font-light text-slate-400 leading-6";
    main.appendChild(container);
    container.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(small);
    div2.appendChild(title);
    div2.appendChild(desc);
    img.src = res[i].image;
    title.innerHTML = res[i].title;
    small.innerHTML = res[i].description;
  }
}
