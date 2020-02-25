
// Simple timer
class AtomicTimer {
    // Start time (set in constructor)
    startTime = Date.now();
    // Timer name
    name = 'Default timer';
    // Timer duration (in seconds)
    duration = 0;
    // If the timer is running
    running = false;
    // Amount of time the timer has been paused
    delayTime = 0;
    // Time pause began
    pauseTime = Date.now();

    // Timer only needs its duration and a name
    constructor(duration, name, startTime = Date.now(), running = false, delayTime = 0, pauseTime = Date.now()) {
        this.duration = duration;
        this.name = name;
        // Copy over optional values
        this.startTime = startTime;
        this.running = running;
        this.delayTime = delayTime;
        this.pauseTime = pauseTime;
    }

    // Start the timer and set the start time to Date.now()
    // Does nothing if the timer is already running
    start() {
        if (this.running) {
            console.log('Timer already running', this.startTime);
            return;
        }
        this.startTime = Date.now();
        this.running = true;
        console.log('Starting timer at', this.startTime);
        console.log(this);
    }

    // Restart the timer setting the start time to Date.now()
    restart() {
        this.startTime = Date.now();
        this.running = true;
        console.log('Restarting timer at', this.startTime);
        console.log(this);
    }

    // Pause the timer and track the pause time
    // Does nothing if the timer is already paused.
    pause() {
        if (!this.running) {
            console.log('Timer not running in timer.pause()');
            return;
        }
        this.running = false;
        this.pauseTime = Date.now();
        console.log('Pausing timer at', this.pauseTime);
        console.log(this);
    }

    // Resume the timer and compute paused time based on when pause was called
    // Does nothing if the timer is currently running.
    resume() {
        if (this.running) {
            console.log('Timer already running in timer.resume()');
            return;
        }
        this.running = true;
        this.delayTime += Date.now() - this.pauseTime;
        console.log('Resuming timer at', Date.now());
        console.log(this);
    }

    // Returns the remaining time rounded to the nearest second in seconds
    getRemainingTime() {
        var remainingTime = this.duration - (Date.now() - this.startTime - this.delayTime) / 1000;
        if (!this.running) {
            remainingTime = this.duration - (this.pauseTime - this.startTime - this.delayTime) / 1000;
        }
        // console.log('Time remaining', remainingTime);
        return Math.round(remainingTime);
    }
}

// allow it to be included in the server
if (module) module.exports = AtomicTimer;