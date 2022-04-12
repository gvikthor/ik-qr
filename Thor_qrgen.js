const entryQR = new QRCode(qrdiv, {
    text: 'invalid',
    width: qrOriginalSize,
    height: qrOriginalSize,
    colorDark : '#000000',
    colorLight : baseColor,
    correctLevel : QRCode.CorrectLevel.H
});

function regenerateQR(code){
    entryQR.clear()
    entryQR.makeCode(code)
}