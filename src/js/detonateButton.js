import { calculateAllSurfaceEffects } from "./surface";
import { calculateAllAirEffects } from "./airburst";
import { airburstView } from "./view/airburstView";
import { surfaceView } from "./view/surfaceView";

const detonateButton = document.querySelector(".main__button");
const radioButtonAir = document.querySelector(".air");
const radioButtonSurface = document.querySelector(".surface");
export const kilotonsInput = document.querySelector(".warhead__input");

function detonateButtonAction() {
  detonateButton.addEventListener("click", (e) => {
    if (radioButtonAir.checked) {
      e.preventDefault();
      const airCalculations = calculateAllAirEffects(kilotonsInput.value);
      airburstView(airCalculations, kilotonsInput.value);
    }
    if (radioButtonSurface.checked) {
      e.preventDefault();
      const surfaceCalculations = calculateAllSurfaceEffects(
        kilotonsInput.value,
      );
      surfaceView(surfaceCalculations, kilotonsInput.value);
    }
  });
}

detonateButtonAction();
