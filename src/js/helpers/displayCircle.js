import L from "leaflet";

let circleLayerGroup;

export function buildEffectCircles(effectData) {
  return [
    {
      color: "#FFA500",
      radius: effectData.threeDegreeBurn.radiusM,
      fillColor: "rgba(255, 165, 0, 0.3)",
    },
    {
      color: "#808080",
      radius: effectData.lightBlast.radiusM,
      fillColor: "rgba(128,128,128,0.3)",
    },
    {
      color: "#4287f5",
      radius: effectData.moderateBlast.radiusM,
      fillColor: "rgba(17, 0, 255, 0.3)",
    },
    {
      color: "#df2020",
      radius: effectData.heavyBlast.radiusM,
      fillColor: "rgba(223, 32, 32, 0.3)",
    },
    {
      color: "#00FF00",
      radius: effectData.radiation.radiusM,
      fillColor: "rgba(0, 255, 0, 0.3)",
    },
    {
      color: "#ffff00",
      radius: effectData.fireball.radiusM,
      fillColor: "rgba(255, 165, 0, 0.3)",
    },
  ];
}

export function displayCircles(map, center, circles) {
  if (!circleLayerGroup) {
    circleLayerGroup = L.layerGroup().addTo(map);
  } else {
    circleLayerGroup.clearLayers();
  }

  circles.forEach(({ color, radius, fillColor, fillOpacity = 0.6 }) => {
    L.circle(center, {
      color,
      radius,
      fillOpacity,
      fillColor,
    }).addTo(circleLayerGroup);
  });
}

export function clearDisplayedCircles() {
  if (circleLayerGroup) {
    circleLayerGroup.clearLayers();
  }
}
