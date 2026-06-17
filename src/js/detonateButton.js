import { calculateAllSurfaceEffects } from "./surface";
import { surfaceView } from "./view/surfaceView";

const detonateButton = document.querySelector(".main__button");
const radioButtonAir = document.querySelector(".air");
const radioButtonSurface = document.querySelector(".surface");
export const kilotonsInput = document.querySelector(".warhead__input");

function detonateButtonAction() {
  detonateButton.addEventListener("click", (e) => {
    if (radioButtonAir.checked) {
      e.preventDefault();
    }
    if (radioButtonSurface.checked) {
      e.preventDefault();
      const surfaceCalculations = calculateAllSurfaceEffects(
        kilotonsInput.value,
      );
      surfaceView(surfaceCalculations);
    }
  });
}

detonateButtonAction();
