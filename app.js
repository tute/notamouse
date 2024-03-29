// Generated by CoffeeScript 1.4.0
var App;

App = {
  kittenWidth: 200,
  move: 50,
  moveBox: function(direction) {
    var box;
    document.getElementById('kitpic').src = this.newKittenUrl();
    box = document.getElementById('kitten_box');
    if (direction === 'up') {
      this.kittenWidth += 1;
      box.style.top = (box.offsetTop + this.move) + 'px';
      return this.updateWhatHappened('&darr;');
    } else if (direction === 'down') {
      this.kittenWidth -= 1;
      box.style.top = (box.offsetTop - this.move) + 'px';
      return this.updateWhatHappened('&uarr;');
    } else if (direction === 'right') {
      this.kittenWidth += 1;
      box.style.left = (box.offsetLeft - this.move) + 'px';
      return this.updateWhatHappened('&larr;');
    } else if (direction === 'left') {
      this.kittenWidth -= 1;
      box.style.left = (box.offsetLeft + this.move) + 'px';
      return this.updateWhatHappened('&rarr;');
    }
  },
  newKittenUrl: function() {
    return 'http://placekitten.com/200/' + this.kittenWidth;
  },
  updateWhatHappened: function(content) {
    return document.getElementById('what_happened').innerHTML = content;
  }
};
