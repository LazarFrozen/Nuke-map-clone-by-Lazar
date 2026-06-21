import { displayEffects } from "./detonateButton";
import { clearDisplayedCircles } from "./helpers/displayCircle";

const clearAllEffects = document.querySelector(".clear__effects");

function clearAllEffectButtonAction() {
  clearAllEffects.addEventListener("click", (e) => {
    e.preventDefault();
    displayEffects.innerHTML = "";
    clearDisplayedCircles();
  });
}

clearAllEffectButtonAction();
