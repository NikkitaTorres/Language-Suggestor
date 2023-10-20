function handleSelect(event) {
  event.preventDefault();
  const Question1 = parseInt(document.getElementById("Q1").value);
  const Question2 = parseInt(document.getElementById("Q2").value);
  const Question3 = parseInt(document.getElementById("Q3").value);
  const Question4 = parseInt(document.getElementById("Q4").value);
  const Question5 = parseInt(document.getElementById("Q5").value);
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
  let output = document.getElementById("output");
  document.getElementById("select-form").reset();
});