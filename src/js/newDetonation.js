import { calculateAllSurfaceEffects } from "./surface";
import { calculateAllAirEffects } from "./airburst";
import { airburstView } from "./view/airburstView";
import { surfaceView } from "./view/surfaceView";
import { marker, map } from "./script";
import { displayEffects } from "./detonateButton";
import { buildEffectCircles, displayCircles } from "./helpers/displayCircle";
import { zoomToEffect } from "./helpers/zoomLevel";

const newDetonationButton = document.querySelector(".new__detonation");
const radioButtonAir = document.querySelector(".air");
const radioButtonSurface = document.querySelector(".surface");
const kilotonsInput = document.querySelector(".warhead__input");

function newDetonationButtonAction() {
  newDetonationButton.addEventListener("click", (e) => {
    e.preventDefault();
    const center = [marker.getLatLng().lat, marker.getLatLng().lng];
    displayEffects.innerHTML = "";

    if (radioButtonAir.checked) {
      const airCalculations = calculateAllAirEffects(kilotonsInput.value);
      airburstView(airCalculations, kilotonsInput.value);
      displayCircles(map, center, buildEffectCircles(airCalculations), false);
      zoomToEffect(map, marker, kilotonsInput.value);
    }

    if (radioButtonSurface.checked) {
      const surfaceCalculations = calculateAllSurfaceEffects(
        kilotonsInput.value,
      );
      surfaceView(surfaceCalculations, kilotonsInput.value);
      displayCircles(
        map,
        center,
        buildEffectCircles(surfaceCalculations),
        false,
      );
      zoomToEffect(map, marker, kilotonsInput.value);
    }
  });
}

newDetonationButtonAction();
