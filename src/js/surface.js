import calculateEffect from "./helpers/calculateEffect.js";

export const SURFACE_EFFECTS = {
  fireball: {
    formula: (y) => Math.pow(y, 0.4) * 145 * 0.3048,
    inputUnit: "m",
  },

  threeDB: {
    formula: (y) => Math.pow(y, 0.41) * 0.67,
  },

  light: {
    formula: (y) => Math.pow(y, 0.33) * 1.42,
  },

  medium: {
    formula: (y) => Math.pow(y, 0.33) * 0.46,
  },

  heavy: {
    formula: (y) => Math.pow(y, 0.33) * 0.22,
  },

  radiation: {
    formula: (y) => Math.pow(y * 400, 0.19) / 4,
  },
};

export const calculateAllSurfaceEffects = (kilotons) =>
  Object.fromEntries(
    Object.entries(SURFACE_EFFECTS).map(([effect, config]) => [
      effect,
      calculateEffect({
        kilotons,
        ...config,
      }),
    ]),
  );
