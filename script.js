const line = document.getElementById('line');

let angle = 0;

setInterval(function () {
  angle += 2;  // increase by 2 degrees
  line.style.transform = "rotate(" + angle + "deg)";
}, 20);

