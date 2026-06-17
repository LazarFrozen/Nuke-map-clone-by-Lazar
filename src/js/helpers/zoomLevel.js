const ZOOM_RANGES = [
  { min: 30000, max: 100000, zoom: 9 },
  { min: 4000, max: 30000, zoom: 10 },
  { min: 500, max: 4000, zoom: 11 },
  { min: 50, max: 500, zoom: 12 },
  { min: 5, max: 50, zoom: 13 },
  { min: 0.5, max: 5, zoom: 14 },
  { min: 0.05, max: 0.5, zoom: 15 },
  { min: 0.005, max: 0.05, zoom: 16 },
  { min: 0.001, max: 0.005, zoom: 17 },
];

export function getZoomLevel(kilotons) {
  const value = Number(kilotons);
  const range = ZOOM_RANGES.find(
    ({ min, max }) => value >= min && value <= max,
  );

  return range?.zoom;
}

export function zoomToEffect(map, marker, kilotons) {
  const zoom = getZoomLevel(kilotons);

  if (!zoom) {
    return;
  }

  map.setView([marker.getLatLng().lat, marker.getLatLng().lng], zoom);
}
