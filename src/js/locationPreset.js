import locationsData from "./data/locations.json";
import { marker } from "./script";
import { map } from "./script";

const locations = document.querySelector(".location__options");

function selectLocationPreset() {
  locationsData.map((location) => {
    locations.addEventListener("click", () => {
      if (location.name === locations.value) {
        map.setView([location.lat, location.lng], 13);
        marker.setLatLng([location.lat, location.lng]);
      }
    });
  });
}

selectLocationPreset();
