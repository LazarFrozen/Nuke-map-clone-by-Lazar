export function effectBlock({ effectKey, icon, title, body }) {
  return `<div class="card__effect" data-effect-key="${effectKey}">
    <div class="card__title">
      <div class="blast__icon ${icon}"></div>
      <div class="effect__title">${title}</div>
    </div>
    <div class="effect__text">
      ${body}
    </div>
  </div>`;
}
