const msg = document.querySelector('#msg')

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    msg.innerText += `decoded text: ${decodedText}, decoded result: ${decodedResult}`
}

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    //msg.innerText = `Code scan error = ${error}`
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
/* verbose= */ false)
html5QrcodeScanner.render(onScanSuccess, onScanFailure)