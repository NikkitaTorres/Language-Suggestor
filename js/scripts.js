function handleSelect(event) {
  event.preventDefault();
}

window.addEventListener("load", function() {
  const Question1 = parseInt(document.querySelector("Q1").value);
  document.getElementById("select-form").addEventListener("submit", handleSelect);
  let output = document.getElementById("output");
  document.getElementById("select-form").reset();
});