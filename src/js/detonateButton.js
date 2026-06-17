import { calculateAllSurfaceEffects } from "./surface";
import { calculateAllAirEffects } from "./airburst";
import { airburstView } from "./view/airburstView";
import { surfaceView } from "./view/surfaceView";
import { marker } from "./script";
import { map } from "./script";
import { buildEffectCircles, displayCircles } from "./helpers/displayCircle";
import { zoomToEffect } from "./helpers/zoomLevel";

export const displayEffects = document.querySelector(".effects__container");
const detonateButton = document.querySelector(".main__button");
const radioButtonAir = document.querySelector(".air");
const radioButtonSurface = document.querySelector(".surface");
const kilotonsInput = document.querySelector(".warhead__input");

function detonateButtonAction() {
  detonateButton.addEventListener("click", (e) => {
    displayEffects.innerHTML = "";
    const center = [marker.getLatLng().lat, marker.getLatLng().lng];
    if (radioButtonAir.checked) {
      e.preventDefault();
      const airCalculations = calculateAllAirEffects(kilotonsInput.value);
      airburstView(airCalculations, kilotonsInput.value);
      displayCircles(map, center, buildEffectCircles(airCalculations));
      zoomToEffect(map, marker, kilotonsInput.value);
    }
    if (radioButtonSurface.checked) {
      e.preventDefault();
      const surfaceCalculations = calculateAllSurfaceEffects(
        kilotonsInput.value,
      );
      surfaceView(surfaceCalculations, kilotonsInput.value);
      displayCircles(map, center, buildEffectCircles(surfaceCalculations));
      zoomToEffect(map, marker, kilotonsInput.value);
    }
  });
}

detonateButtonAction();
