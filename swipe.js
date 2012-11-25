// Generated by CoffeeScript 1.4.0
var NotAMouse;

NotAMouse = {
  config: {
    min_move_x: 20,
    min_move_y: 20,
    preventDefaultEvents: true
  },
  state: {
    startX: null,
    startY: null,
    isMoving: false
  },
  wipeLeft: function() {},
  wipeRight: function() {},
  wipeUp: function() {},
  wipeDown: function() {},
  onTouchStart: function(e) {
    var that;
    that = NotAMouse;
    if (e.touches.length === 1) {
      that.state.startX = e.touches[0].pageX;
      that.state.startY = e.touches[0].pageY;
      that.state.isMoving = true;
      return document.addEventListener('touchmove', that.onTouchMove, false);
    }
  },
  onTouchMove: function(e) {
    var dx, dy, that;
    that = NotAMouse;
    if (that.config.preventDefaultEvents) {
      e.preventDefault();
    }
    if (that.state.isMoving) {
      dx = that.state.startX - e.touches[0].pageX;
      dy = that.state.startY - e.touches[0].pageY;
      if (Math.abs(dx) >= that.config.min_move_x) {
        that.cancelTouch();
        if (dx > 0) {
          return that.wipeRight();
        } else {
          return that.wipeLeft();
        }
      } else if (Math.abs(dy) >= that.config.min_move_y) {
        that.cancelTouch();
        if (dy > 0) {
          return that.wipeDown();
        } else {
          return that.wipeUp();
        }
      }
    }
  },
  cancelTouch: function() {
    var that;
    that = NotAMouse;
    document.removeEventListener('touchmove', that.onTouchMove);
    that.state.startX = null;
    return that.state.isMoving = false;
  },
  initialize: function() {
    if ('ontouchstart' in document.documentElement) {
      return document.addEventListener('touchstart', NotAMouse.onTouchStart, false);
    }
  }
};
