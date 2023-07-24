const allBtn = document.querySelectorAll(".btns");
const displayEl = document.getElementById("display");
function num(val) {
  displayEl.value += val;
}
function Clear() {
  displayEl.value = "";
}
function qual() {
  try {
    displayEl.value = eval(displayEl.value);
  } catch {
    displayEl.value = "Error";
  }
}
function del() {
  displayEl.value = displayEl.value.slice(0, -1);
}
