
function goToQuiz() {
    document.getElementById("startScreen").classList.add("fadeOut");

    setTimeout(function() {
        window.location.href = "quiz-index.html";  
    }, 500);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        goToQuiz();
    }
});

document.getElementById("startScreen").addEventListener("click", function() {
    goToQuiz();
});
