function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("Q1").value;
}

window.addEventListener("load", function() {
  const Q1 = document.getElementById("Q1").value;
  document.getElementById("select-form").addEventListener("submit", handleSelect);
  let output = document.getElementById("output");
  document.getElementById("select-form").reset();
});