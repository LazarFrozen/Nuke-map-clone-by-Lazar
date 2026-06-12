const detonateButton = document.querySelector(".main__button");
const radioButtonAir = document.querySelector(".air");
const radioButtonSurface = document.querySelector(".surface");

function detonateButtonAction() {
  detonateButton.addEventListener("click", (e) => {
    if (radioButtonAir.checked) {
      e.preventDefault();
    }
    if (radioButtonSurface.checked) {
      e.preventDefault();
    }
  });
}

detonateButtonAction();
