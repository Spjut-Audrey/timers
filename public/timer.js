// global timer
var timer;

function setTimeNumValue(val) {
    document.getElementById('timeNum').value = val;
}

// https://jsfiddle.net/robbmj/vpq5toeq/4/
function timerStart() {
    var display = document.querySelector('#time1');
    var timeSet = document.querySelector('#timeNum').value;
    var timerName = document.querySelector('#timerName').value;

    // Multiply by 60 to have the value indicate minutes
    // var timer = new CountDownTimer(timeSet * 60);
    timer = new CountDownTimer(timeSet);

    timer.onTick(format(display)).onTick(restart).start();

    function restart() {
        // This used to do something, it's only still here to show how to set multiple callback functions on the timer
    }

    // Format the minutes and seconds to display in the given element
    function format(display) {
        return function (minutes, seconds) {
            if (minutes < 0) {
                minutes = - minutes;
            }
            if (seconds < 0) {
                seconds = - seconds;
            }
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            if (this.negative) {
                display.classList.add("negative");
                minutes = "-" + minutes;
            } else {
                display.classList.remove("negative");
            }
            display.textContent = timerName + " " + minutes + ':' + seconds;
        };
    }
};

function resetTimer() {
    // set ticks to 0 to "delete"
    // timer.tickFtns = [];
    // timer.negative = false;
    timer.running = false;
    delete timer;
    timerStart();
    updatePauseButton();
}

// Update the text on the pause/resume button
function updatePauseButton() {
    pauseButton = document.getElementById('pause');

    if (timer.running) {
        pauseButton.innerHTML = "Pause";
    } else {
        pauseButton.innerHTML = "Resume";
    }
}

function pauseTimer() {
    timer.running = !timer.running;
    updatePauseButton();
}
