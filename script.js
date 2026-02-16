function play(userChoice) {

    const choices = ['stone', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("userChoice").innerText =
        "Your Choice: " + userChoice;

    document.getElementById("computerChoice").innerText =
        "Computer Choice: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    }
    else if (
        (userChoice === 'stone' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
    ) {
        result = "You Win! 🎉";
    }
    else {
        result = "Computer Wins! 😢";
    }

    document.getElementById("winner").innerText = result;
}
