import calculateEffect from "./helpers/calculateEffect.js";

export const AIR_EFFECTS = {
  fireball: {
    inputUnit: "m",
    formula: (y) => Math.pow(y, 0.4) * 110 * 0.3048,
  },

  threeDegreeBurn: {
    formula: (y) => Math.pow(y, 0.41) * 0.72,
  },

  lightBlast: {
    formula: (y) => Math.pow(y, 0.33) * 1.66,
  },

  moderateBlast: {
    formula: (y) => Math.pow(y, 0.33) * 0.57,
  },

  heavyBlast: {
    formula: (y) => Math.pow(y, 0.33) * 0.24,
  },

  radiation: {
    formula: (y) => Math.pow(y * 400, 0.19) / 6.75,
  },
};

export const calculateAllAirEffects = (kilotons) =>
  Object.fromEntries(
    Object.entries(AIR_EFFECTS).map(([effect, config]) => [
      effect,
      calculateEffect({
        kilotons,
        ...config,
      }),
    ]),
  );
