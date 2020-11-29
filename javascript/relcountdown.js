var time = 1 * 5;
setInterval(generateQR, time * 1000);
var r = document.getElementById("reloadcount");
var tmp = time;

setInterval(function () {
  var c = tmp--,
    min = (c / 60) >> 0,
    sec = c - min * 60 + "";
  r.textContent = `Reload in  ${min}:${sec.length > 1 ? "" : "0"}${sec}`;
  tmp != 0 || (tmp = time);
}, 1000);
