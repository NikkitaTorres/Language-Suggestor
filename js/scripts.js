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
      message = "Python: An excerpt from coursera.org - \"A great language for developing websites and software, task automation, data analysis, and data visualization.\" This is a great beginner language and one that is sure to be useful! Checkout python.org/about/gettingstarted for more info!";
    } else if (result > 8 && result <= 12) {
      message = "Ruby: An excerpt from pluralsight.com - \"Used for building desktop applications, static websites, data processing services, and even automation tools.\" Ruby is a popular language and beginner friendly! You can read more about Ruby here: https://guides.rubyonrails.org";
    } else if (result > 12) {
      message = "C#: An excerpt from pluralsight.com - \"C# can be used to create a number of different programs and applications: mobile apps, desktop apps, cloud-based services, websites, enterprise software and games.\" Find out more about how to get started with learning C# here: https://www.w3schools.com/cs/cs_getstarted.php";
    } else {
      message = "Please fill out all questions for a result."
    }

    document.getElementById("RESULTS").removeAttribute("class");
    document.getElementById("output").innerText = message;
    document.getElementById("select-form").reset();
  });
});
