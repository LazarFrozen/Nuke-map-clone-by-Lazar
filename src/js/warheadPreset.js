import warheadData from "./data/warheads.json";

const warheads = document.querySelector(".warhead__options");
const warheadInput = document.querySelector(".warhead__input");

function selectWarheadPreset() {
  warheadData.map((warhead) => {
    warheads.addEventListener("click", () => {
      if (warhead.name === warheads.value) {
        warheadInput.value = warhead.kilotons;
      }
    });
  });
}

selectWarheadPreset();
