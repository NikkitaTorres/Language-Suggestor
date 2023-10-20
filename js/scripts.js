let Question1, Question2, Question3, Question4, Question5;

function handleSelect(event) {
  event.preventDefault();
  Question1 = parseInt(document.getElementById("Q1").value);
  Question2 = parseInt(document.getElementById("Q2").value);
  Question3 = parseInt(document.getElementById("Q3").value);
  Question4 = parseInt(document.getElementById("Q4").value);
  Question5 = parseInt(document.getElementById("Q5").value);

}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
  
  let result;
  if (Question1 + Question2 + Question3 + Question4 + Question5 < 5) {
    result = "Please fill out all questions for a result.";
  } else if (Question1 + Question2 + Question3 + Question4 + Question5 >= 5 && Question1 + Question2 + Question3 + Question4 + Question5 < 8) {
    result = "Python";
  } else if (Question1 + Question2 + Question3 + Question4 + Question5 > 8 && Question1 + Question2 + Question3 + Question4 + Question5 <= 12) {
    result = "Ruby";
  } else if (Question1 + Question2 + Question3 + Question4 + Question5 > 12) {
    result = "C#";
  }

  document.getElementById("output").innerText = result;
  document.getElementById("select-form").reset();
});