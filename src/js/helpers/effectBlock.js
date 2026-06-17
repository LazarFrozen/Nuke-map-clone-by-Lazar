export const displayEffects = document.querySelector(".effects__container");

export function effectBlock({ icon, title, body }) {
  return `<div class="card__effect">
    <div class="card__title">
      <div class="blast__icon ${icon}"></div>
      <div class="effect__title">${title}</div>
    </div>
    <div class="effect__text">
      ${body}
    </div>
  </div>`;
}
