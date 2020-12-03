function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: 256,
  height: 256,
});

function generateQR() {
  currenturl = window.location.href;
  qrcode.makeCode(currenturl + "/" + makeid(10));
}

generateQR();
