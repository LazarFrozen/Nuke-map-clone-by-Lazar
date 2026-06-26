import L from "leaflet";

let circleLayerGroup;
let outlinePaneReady = false;
const circleLayersByEffectKey = new Map();

function ensureOutlinePane(map) {
  if (outlinePaneReady || map.getPane("effect-outline-pane")) {
    outlinePaneReady = true;
    return;
  }

  const pane = map.createPane("effect-outline-pane");
  pane.style.zIndex = 650;
  pane.style.pointerEvents = "none";
  outlinePaneReady = true;
}

function setEffectHoverState(effectKey, isActive) {
  const card = document.querySelector(
    `.card__effect[data-effect-key="${effectKey}"]`,
  );

  card?.classList.toggle("is-highlighted", isActive);

  const circleLayers = circleLayersByEffectKey.get(effectKey);
  circleLayers?.forEach((layer) => {
    layer.getElement()?.classList.toggle("is-highlighted", isActive);
  });
}

export function buildEffectCircles(effectData) {
  return [
    {
      effectKey: "fireball",
      color: "#FFA500",
      radius: effectData.fireball.radiusM,
      fillColor: "rgba(255, 165, 0, 0.3)",
    },
    {
      effectKey: "threeDegreeBurn",
      color: "#ffff00",
      radius: effectData.threeDegreeBurn.radiusM,
      fillColor: "rgba(255, 165, 0, 0.3)",
    },
    {
      effectKey: "lightBlast",
      color: "#808080",
      radius: effectData.lightBlast.radiusM,
      fillColor: "rgba(128,128,128,0.3)",
    },
    {
      effectKey: "moderateBlast",
      color: "#4287f5",
      radius: effectData.moderateBlast.radiusM,
      fillColor: "rgba(17, 0, 255, 0.3)",
    },
    {
      effectKey: "heavyBlast",
      color: "#df2020",
      radius: effectData.heavyBlast.radiusM,
      fillColor: "rgba(223, 32, 32, 0.3)",
    },
    {
      effectKey: "radiation",
      color: "#00FF00",
      radius: effectData.radiation.radiusM,
      fillColor: "rgba(0, 255, 0, 0.3)",
    },
  ];
}

export function displayCircles(map, center, circles, replaceExisting = true) {
  ensureOutlinePane(map);

  if (!circleLayerGroup) {
    circleLayerGroup = L.layerGroup().addTo(map);
  } else if (replaceExisting) {
    circleLayerGroup.clearLayers();
  }

  circleLayersByEffectKey.clear();

  circles.forEach(
    ({ effectKey, color, radius, fillColor, fillOpacity = 0.6 }) => {
      const fillCircle = L.circle(center, {
        className: `effect-circle effect-circle--${effectKey}`,
        color,
        radius,
        fillOpacity,
        fillColor,
      }).addTo(circleLayerGroup);

      const outlineCircle = L.circle(center, {
        className: `effect-circle effect-circle--${effectKey} effect-circle-outline`,
        pane: "effect-outline-pane",
        color,
        weight: 2,
        opacity: 1,
        fillOpacity: 0,
        interactive: false,
        radius,
      }).addTo(circleLayerGroup);

      outlineCircle.once("add", () => {
        outlineCircle
          .getElement()
          ?.style.setProperty("--effect-stroke", color);
      });
      outlineCircle.getElement()?.style.setProperty("--effect-stroke", color);

      if (!circleLayersByEffectKey.has(effectKey)) {
        circleLayersByEffectKey.set(effectKey, new Set());
      }

      circleLayersByEffectKey.get(effectKey).add(outlineCircle);
    },
  );
}

export function syncEffectHoverInteractions() {
  const cards = document.querySelectorAll(".card__effect[data-effect-key]");

  cards.forEach((card) => {
    const effectKey = card.dataset.effectKey;

    if (card.dataset.hoverBound === "true") {
      return;
    }

    card.dataset.hoverBound = "true";

    card.addEventListener("mouseenter", () =>
      setEffectHoverState(effectKey, true),
    );
    card.addEventListener("mouseleave", () =>
      setEffectHoverState(effectKey, false),
    );
  });
}

export function clearDisplayedCircles() {
  if (circleLayerGroup) {
    circleLayerGroup.clearLayers();
  }

  circleLayersByEffectKey.clear();
}
