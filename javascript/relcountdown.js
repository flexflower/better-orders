var time = 1 * 60,
  r = document.getElementById("reloadcount"),
  tmp = time;

setInterval(function () {
  var c = tmp--,
    m = (c / 60) >> 0,
    s = c - m * 60 + "";
  r.textContent = "Reload in " + m + ":" + (s.length > 1 ? "" : "0") + s;
  tmp != 0 || (tmp = time);
}, 1000);
