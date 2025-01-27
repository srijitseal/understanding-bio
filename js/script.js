// Countdown Timer Function
const countdownDate = new Date("2025-03-30T00:00:00").getTime(); // Set launch date here

const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft <= 0) {
        clearInterval(interval);
        timerElement.innerHTML = "Launched!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Days
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Seconds

        // Ensure double digits for hours, minutes, and seconds
        const formattedTime = `${days}d ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        timerElement.innerHTML = formattedTime;
    }
}

// Helper function to add leading zero
function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

const interval = setInterval(updateCountdown, 1000);
