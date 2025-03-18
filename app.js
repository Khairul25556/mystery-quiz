
     document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            document.getElementById("startScreen").classList.add("fadeOut");

            setTimeout(function() {
                window.location.href = "quiz-index.html";  
            }, 500);
        }
    });