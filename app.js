const textArea = document.getElementById("textarea");
const totalChar = document.getElementById("total-char");
const remaningChar = document.getElementById("remaning-char");

textArea.addEventListener("keyup", () => {
  // console.log('pressed')
  updateCounter();
});

function updateCounter() {
  totalChar.innerText = textArea.value.length;

  remaningChar.innerText =
    textArea.getAttribute("maxLength") - textArea.value.length;
}
