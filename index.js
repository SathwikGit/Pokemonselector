let count = 0;
let type = "NONE";

let pokemons = [];

function takeinput() {
  document.body
    .querySelector(".container")
    .querySelector(".display").innerHTML = "";
  count = document.body.querySelector(".pkcount").value;
  type = document.body.querySelector(".pktype").value;

  const el = document.createElement("div");
  el.innerHTML = `<b>${type}</b>` + "<b> POKEMONs: </b>" + `${count}`;
  document.body
    .querySelector(".container")
    .querySelector(".display")
    .appendChild(el);

  fetch("https://pokeapi.co/api/v2/type/" + `${type}`)
    .then((response) => response.json())
    .then((data) => {
      pokemons = data.pokemon;
      // console.log(electricPokemonArray);
      addpokemons(count);
    });

  console.log(type);
  console.log(count);
}

async function createcard(ind) {
  const el1 = document.createElement("div");
  el1.className = "card";

  const name = document.createElement("div");
  name.innerHTML = "NAME: " + `${pokemons[ind].pokemon.name}`;

  let url = pokemons[ind].pokemon.url;

  const response = await fetch(url);
  const data = await response.json();
  const imgsrc = data.sprites.front_default;

  const img = document.createElement("img");
  img.src = imgsrc;

  const health = document.createElement("div");
  health.innerHTML = data.stats[0].base_stat;

  const select = document.createElement("button");
  select.innerHTML = "SELECT";

  const del = document.createElement("button");
  del.innerHTML = "DELETE";

  el1.appendChild(name);
  el1.appendChild(img);
  el1.appendChild(health);
  el1.appendChild(select);
  el1.appendChild(del);

  return el1;
}

async function addpokemons(count) {
  const head = document.createElement("div");
  head.id = "cards";

  for (let i = 0; i < count; i++) {
    const el = await createcard(i);
    head.appendChild(el);
  }

  document.body
    .querySelector(".container")
    .querySelector(".display")
    .appendChild(head);
}
