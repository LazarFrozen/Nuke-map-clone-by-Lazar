export function validateYieldInput(kilotonsInput, alertBox) {
  const value = kilotonsInput.value.trim();
  const numericValue = Number(value);

  if (alertBox) {
    alertBox.innerHTML = "";
  }

  if (value === "") {
    alertBox?.insertAdjacentHTML(
      "afterbegin",
      "<p>Please specify a yield above.</p>",
    );
    return false;
  }

  if (Number.isNaN(numericValue)) {
    alertBox?.insertAdjacentHTML("afterbegin", "<p>Enter a number!</p>");
    return false;
  }

  if (numericValue > 100000) {
    kilotonsInput.value = 100000;
    window.alert(
      "The NUKEMAP clone cannot accurately model yields more than 100,000 kilotons (100 megatons).",
    );
    return false;
  }

  if (numericValue < 0.001) {
    kilotonsInput.value = 0.001;
    alertBox?.insertAdjacentHTML(
      "afterbegin",
      "<p>Can't be lower then 0.001 kilotons (1 ton).</p>",
    );
    return false;
  }

  return true;
}
