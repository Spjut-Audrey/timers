// source: https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
  this.negative = false;
  this.delay = 0; // Counts number of seconds of delay
}

// Function to start the timer
CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    console.log('In timer()');
    diff = that.duration - (((Date.now() - start) / 1000) | 0) + that.delay;

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      setTimeout(timer, that.granularity);
      that.negative = true;
    }

    // Increment delay time when paused
    if (!that.running) {
      that.delay = that.delay + 1;
    }
    console.log('delay: ' + that.delay);

    obj = CountDownTimer.parse(diff);
    console.log(obj);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.pauseResume = function() {
  this.running = ! this.running;
  this.start();
}

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};