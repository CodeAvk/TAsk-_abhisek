function checkAnswer(button) {
  var answers = document.querySelectorAll(".answer");
  var isCorrect = button.textContent === "c) Vitamin K IV";

  for (var i = 0; i < answers.length; i++) {
    answers[i].classList.remove("selected");
    answers[i].classList.remove("correct");
    answers[i].classList.remove("incorrect");

    if (answers[i].classList.contains("incorrect")) {
      answers[i].classList.add("incorrect");
    }
  }

  button.classList.add("selected");

  if (isCorrect) {
    button.classList.add("correct");
    alert("Correct! Vitamin K IV should be given first.");
    document.getElementById("nextButton").style.display = "block";
  } else {
    button.classList.add("incorrect");
    alert("Incorrect. Try Again.");
  }
}

function showNextPage() {
  window.location.href = "next_page.html";
}

function resetQuestion() {
  var answers = document.querySelectorAll(".answer");
  for (var i = 0; i < answers.length; i++) {
    answers[i].classList.remove("selected");
    answers[i].classList.remove("correct");
    answers[i].classList.remove("incorrect");
  }
  document.getElementById("result").classList.remove("show");
  document.getElementById("nextButton").style.display = "none";
}
