const mainColor = '#008B94'
const baseColor = '#EDF2F4'

const headerHeight = 290
const titleSize = 65
const textSize = 50
const lineHeight = 15
const leftMargin = 20
const qrSizeOnTicket = 500

const texts = [
    {
        title: 'Rendezvény:',
        rows: [
            'Novemberi Nyílt Nap',
            '2022 november 01. 11:00'
        ]
    },
    {
        title: 'Helyszín:',
        rows: [
            'ELTE Lágymányosi Campus Északi Tömb',
            '1117 Bp., Pázmány Péter sétány 1/A'
        ]
    },
    {
        dynamic: true,
        paramID: 'param1',
        title: 'Név:',
        rows: [
            '$param1'
        ]
    }
]

////////////////////////////////////////////
const logo = new Image()
logo.src = 'iklogo.png'

const qrdiv = document.querySelector('#qrcode')
const qrOriginalSize = 1500

const cvs = document.querySelector('#qrcanvas')
const ctx = cvs.getContext('2d')

function generateTicket(regID, dynamicValues){
    ctx.clearRect(0,0,1080,1920)
    initCanvas()
	generateFromData(texts, dynamicValues)
	regenerateQR(regID)
	drawQR(qrSizeOnTicket)
}