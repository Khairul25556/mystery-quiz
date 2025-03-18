
const input = document.getElementById('input');
const output = document.getElementById('output');

const questions = [
    { text: "Have you ever cried during sex?" ,images: ["assets/cry.jpg"]},
    { text: "Have you ever fantasized about murdering your father?", images: ["assets/murder.jpg"] }, // Question with 2 images
    { text: "Are you a giraffe or seagull? giraff(yes)" , images: ["assets/giraff.jpg", "assets/seagull.jpg"] },
    { text: "Are you a red or purple? red(yes)" , images: ["assets/red.png", "assets/blue.png" ] },
    { text: "If a masked figure offered you a job with no questions asked, would you accept it?" },
    { text: "Would you pay to see something no one else has ever seen before?" ,images: ["assets/homelander.jpg"]},
    { text: "If given the chance to control someone's fate, would you do it?"},
    { text: "Would you watch a live stream where people fight to the death, knowing it’s real?" , images: ["assets/mk.jpg"] },
    { text: "If a masked figure handed you a knife and told you to prove yourself, would you do it?" ,images: ["assets/murdr.jpg"]},
    { text: "What if I tell you that I’m watching you? Would you believe me?" ,images: ["assets/mrrobot.jpg"]},
];

let currentQuestionIndex = 0;
let score = 0;

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        let questionText = `$${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].text}\n`;
        
        output.innerHTML += `<p>${questionText}</p>`;

        if (questions[currentQuestionIndex].images) {
            questions[currentQuestionIndex].images.forEach(imgUrl => {
                output.innerHTML += `<img src="${imgUrl}" alt="Question Image">`;
            });
        }

        output.scrollTop = output.scrollHeight; 
    } else {
        if(score == 50 || score == 60 || score == 70){
            output.innerHTML += `<p>You have been marked. Expect a visitor soon...</p>`;
        }
        else if(score == 10 || score == 20 || score == 30 || score == 40){
            output.innerHTML += `<p>Congratulations! You just became part of the experiment...</p>`;
        }
        else if(score == 80 || score == 90 || score == 100){
            output.innerHTML += `<p>Enjoy your last night. You won’t get another chance...</p>`
        }
        else{
            output.innerHTML += `<p>Good Night! You are a good person. Nothings to worry.</p>`;
        }
        // output.innerHTML += `<p> Quiz Finished! Your Score: ${score}/100</p>`;
    }
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const userInput = input.value.trim().toLowerCase();
        handleCommand(userInput);
        input.value = ''; 
    }
});

function handleCommand(command) {
    if (currentQuestionIndex < questions.length) {
        output.innerHTML += `<p><b> You: ${command}</b></p>`;
        
        if (command === "yes") {
            score += 10; 
        } else if (command !== "no") {
            output.innerHTML += `<p>Please answer with 'yes' or 'no'.</p>`;
            return; 
        }

        currentQuestionIndex++;
        askQuestion();
    } else {
        output.innerHTML += `<p> Quiz is over. Type 'restart' to play again.</p>`;
    }

    if (command === "restart") {
        currentQuestionIndex = 0;
        score = 0;
        output.innerHTML = "<p> Quiz Restarted!</p>";
        askQuestion();
    }

    output.scrollTop = output.scrollHeight; 
}

// Start the quiz when the page loads
window.onload = function () {
    output.innerHTML = "<p>Choose wisely. There’s no way back now. Every answer matters. Someone is watching.<br> Answer 10 ques with 'yes' or 'no'.</p>";
    askQuestion();
};