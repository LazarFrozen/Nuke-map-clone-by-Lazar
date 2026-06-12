export const calculateEffect = ({ kilotons, formula, inputUnit = "km" }) => {
  const radius = formula(Number(kilotons));

  const radiusM = inputUnit === "km" ? radius * 1000 : radius;
  const radiusKm = inputUnit === "km" ? radius : radius / 1000;

  const area = radiusM <= 50 ? Math.PI * radiusM ** 2 : Math.PI * radiusKm ** 2;

  return {
    radiusM,
    radius: radiusM <= 1000 ? radiusM.toFixed(2) : radiusKm.toFixed(2),
    unit: radiusM <= 1000 ? "m" : "km",
    area: area.toFixed(2),
    areaUnit: radiusM <= 50 ? "m^2" : "km^2",
  };
};

export default calculateEffect;
