// import data from "./data.json" assert { type: "json" };

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const { pokemones_data } = data;
    const $carrusel_buttons = document.getElementsByClassName("list-buttons");

    $carrusel_buttons[0].addEventListener("click", (event) => {
      const { id } = event.target;
      const pk = pokemones_data.find((pokemon) => pokemon.id == id);

      if (pk !== undefined) {
        const $current_img = document.getElementsByClassName(
          "card__pokemon-container"
        )[0];
        const $current_pokemon = document.getElementsByClassName("table")[0];

        $current_img.innerHTML = `
          <div class="card__pokemon-name">${pk.name}</div>
          <div class="card__container-img">
            <img src=${pk.imgUrl} alt=${pk.name} class="pokemon" />
          </div>
        `;

        $current_pokemon.innerHTML = `
          <div class="table__item">
            <span class="tomato">NO.</span>
            <span>${pk.id}</span>
          </div>
          <div class="table__item">
            <span class="tomato">LEVEL</span>
            <span>${pk.level}</span>
          </div>
          <div class="table__item">
            <span class="tomato">TYPE</span>
            <span>${pk.type}</span>
          </div>
          <div class="table__item">
            <span class="tomato">HABILITY</span>
            <span>${pk.hability}</span>
          </div>
          <div class="table__item">
            <span class="tomato">HEIGHT</span>
            <span>${pk.height}</span>
          </div>
          <div class="table__item">
            <span class="tomato">WEIGHT</span>
            <span>${pk.weight}</span>
          </div>
        </div>
        `;
      }
    });
  });

/* 
  TODO: Refactorizar el codigo y aplicar delegación de evento. 
*/
