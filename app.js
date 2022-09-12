import data from "./data.json" assert { type: "json" };

/* 
  TODO: Refactorizar el codigo y aplicar delegación de evento. 
*/


const { pokemones_data } = data;
const $carrusel_buttons = document.getElementsByClassName("button_img");

for (let i = 0; i < $carrusel_buttons.length; i++) {
  $carrusel_buttons[i].addEventListener("click", (event) => {
    const { id } = event.target;
    const pk = pokemones_data.find((pokemon) => pokemon.id == id);

    const $current_img = document.getElementsByClassName('pokemon_container')[0]
    const $current_pokemon =
      document.getElementsByClassName("pokemon_caract")[0];

    $current_img.innerHTML = `
      <div class="pokemon_name">${pk.name}</div>
      <img src=${pk.imgUrl} alt=${pk.name} class="pokemon_img" />
    `

    $current_pokemon.innerHTML = `
      <div class="element">
        <span>NO.</span>
        <span>${pk.id}</span>
      </div>
      <div class="element">
        <span>LEVEL</span>
        <span>${pk.level}</span>
      </div>
      <div class="element">
        <span>TYPE</span>
        <span>${pk.type}</span>
      </div>
      <div class="element">
        <span>HABILITY</span>
        <span>${pk.hability}</span>
      </div>
      <div class="element">
        <span>HEIGHT</span>
        <span>${pk.height}</span>
      </div>
      <div class="element">
        <span>WEIGHT</span>
        <span>${pk.weight}</span>
      </div>
    </div>
    `;
  });
}
