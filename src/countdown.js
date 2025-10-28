let countDownDate = new Date("January 1, 2026 00:00:00 GMT").getTime();

let timerEl = document.getElementById("timer");

let x = setInterval(() => {
    let nowDate = new Date().getTime();

    let difference = countDownDate - nowDate;

    if (difference < 0) {
        clearInterval(x);
        timerEl.innerText = "EXPIRED";
        return;
    }

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(difference % (1000 * 60) / 1000);

    timerEl.innerText = `${days}:${hours}:${minutes}:${seconds}`;
}, 1000);