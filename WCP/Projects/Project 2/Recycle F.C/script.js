//js
var showText = function(target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function() {
      showText(target, message, index, interval);
    }, interval);
  } else {
    index = 0;
    $(target).html('');
    showText(target, message, index, interval);
  }
}
//jQuery
$(function() {
  showText(".animate", "Trash Can", 0, 270);
});

