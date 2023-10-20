function handleSelect(event) {
  event.preventDefault();
  const Question1 = parseInt(document.getElementById("Q1").value);
  const Question2 = parseInt(document.getElementById("Q2").value);
  const Question3 = parseInt(document.getElementById("Q3").value);
  const Question4 = parseInt(document.getElementById("Q4").value);
  const Question5 = parseInt(document.getElementById("Q5").value);

  const total = Question1 + Question2 + Question3 + Question4 + Question5;
  return total;
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", function(event) {
    const result = handleSelect(event);
    let message;

    if (result < 5 ) {
      message = "Please fill out all questions for a result.";
    } else if (result >= 5 && result < 8) {
      message = "Python";
    } else if (result > 8 && result <= 12) {
      message = "Ruby";
    } else if (result > 12) {
      message = "C#";
    } else {
      message = "Please fill out all questions for a result."
    }

    document.getElementById("output").innerText = message;
    document.getElementById("select-form").reset();
  });
});
