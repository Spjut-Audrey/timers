//https://jsfiddle.net/robbmj/vpq5toeq/4/
function timerStart() {
    var display = document.querySelector('#time1');
    var timeSet = document.querySelector('#timeNum').value;
    var timerName = document.querySelector('#timerName').value;
    // var timer = new CountDownTimer(timeSet * 60);
    var timer = new CountDownTimer(timeSet);    

    timer.onTick(format(display)).onTick(restart).start();

    function restart() {
        if (this.expired()) {
            console.log("Done");
            console.log(timeSet);
        }
    }

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
            }
            display.textContent = timerName + " " + minutes + ':' + seconds;
        };
    }
};
