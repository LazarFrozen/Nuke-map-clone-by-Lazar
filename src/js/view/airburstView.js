import { effectBlock } from "../helpers/effectBlock";
import { displayEffects } from "../detonateButton";

export function airburstView(airburst, kilotons) {
  const effects = [
    effectBlock({
      effectKey: "fireball",
      icon: "blast__icon--fireball",
      title: `FireBall Radius: ${airburst.fireball.radius} ${airburst.fireball.unit} (${airburst.fireball.area} ${airburst.fireball.areaUnit})`,
      body: `Maximum size of the nuclear fireball; relevance to damage on the ground depends on the height of detonation. If it touches the ground, the amount of radioactive fallout is significantly increased. Anything inside the fireball is effectively vaporized.`,
    }),
    effectBlock({
      effectKey: "threeDegreeBurn",
      icon: "blast__icon--burn",
      title: `Thermal radiation radius (3rd degree burns): ${airburst.threeDegreeBurn.radius} ${airburst.threeDegreeBurn.unit} (${airburst.threeDegreeBurn.area} ${airburst.threeDegreeBurn.areaUnit})`,
      body: `Third degree burns extend throughout the layers of skin, and are often painless because they destroy the pain nerves. They can cause severe scarring or disablement, and can require amputation.`,
    }),
    effectBlock({
      effectKey: "lightBlast",
      icon: "blast__icon--light",
      title: `Light blast damage radius (1 psi): ${airburst.lightBlast.radius} ${airburst.lightBlast.unit} (${airburst.lightBlast.area} ${airburst.lightBlast.areaUnit})`,
      body: `At around 1 psi overpressure, glass windows can be expected to break. This can cause many injuries in a surrounding population who comes to a window after seeing the flash of a nuclear explosion (which travels faster than the pressure wave). Often used as a benchmark for light damage in cities.`,
    }),
    effectBlock({
      effectKey: "moderateBlast",
      icon: "blast__icon--moderate",
      title: `Moderate blast damage radius (5 psi): ${airburst.moderateBlast.radius} ${airburst.moderateBlast.unit} (${airburst.moderateBlast.area} ${airburst.moderateBlast.areaUnit})`,
      body: `At 5 psi overpressure, most residential buildings collapse, injuries are universal, fatalities are widespread. The chances of a fire starting in commercial and residential damage are high, and buildings so damaged are at high risk of spreading fire. Often used as a benchmark for moderate damage in cities.`,
    }),
    effectBlock({
      effectKey: "heavyBlast",
      icon: "blast__icon--heavy",
      title: `Heavy blast damage radius (20 psi): ${airburst.heavyBlast.radius} ${airburst.heavyBlast.unit} (${airburst.heavyBlast.area} ${airburst.heavyBlast.areaUnit})`,
      body: `At 20 psi overpressure, heavily built concrete buildings are severely damaged or demolished; fatalities approach 100%. Often used as a benchmark for heavy damage in cities.`,
    }),
    effectBlock({
      effectKey: "radiation",
      icon: "blast__icon--radiation",
      title: `Radiation radius (500 rem): ${airburst.radiation.radius} ${airburst.radiation.unit} (${airburst.radiation.area} ${airburst.radiation.areaUnit})`,
      body: `500 rem ionizing radiation dose; likely fatal, in about 1 month; 15% of survivors will eventually die of cancer as a result of exposure.`,
    }),
  ];

  const titleDisplay = `<div class="effect__distance">Effect distances for a ${kilotons} kilotons airburst:</div>`;

  displayEffects.insertAdjacentHTML("afterbegin", effects.join(""));
  displayEffects.insertAdjacentHTML("afterbegin", titleDisplay);
}
