var timeleft = 60;
var countdown = setInterval(function () {
  if (timeleft <= 0) {
    location.reload();
  } else {
    document.getElementById("reloadcount").innerHTML =
      "Reload in " + timeleft + "s";
  }
  timeleft -= 1;
}, 1000);
//g