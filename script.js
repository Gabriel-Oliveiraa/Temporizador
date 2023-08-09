const countdownElement = document.getElementById('countdown');
const timeInput = document.getElementById('timeInput');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let timerInterval;

startButton.addEventListener('click', startCountdown);
stopButton.addEventListener('click', stopCountdown);

function startCountdown() {
    const countdownTime = parseInt(timeInput.value, 10);
    
    if (isNaN(countdownTime) || countdownTime <= 0) {
        countdownElement.innerHTML = "Please enter a valid time.";
        return;
    }

    const targetTime = Date.now() + countdownTime * 1000;

    timerInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentTime = Date.now();
        const timeDifference = targetTime - currentTime;

        if (timeDifference > 0) {
            const seconds = Math.floor(timeDifference / 1000);

            countdownElement.innerHTML = `${seconds}s remaining`;
        } else {
            clearInterval(timerInterval);
            countdownElement.innerHTML = "Countdown finished!";
        }
    }
}

function stopCountdown() {
    clearInterval(timerInterval);
    countdownElement.innerHTML = "Countdown stopped.";
}