let sumPNum = 0
let sumRNum = 0

function initCanvas(){
	ctx.fillStyle = baseColor
	ctx.fillRect(0,0,1080,1920)

	ctx.fillStyle = mainColor
	ctx.fillRect(0,0,1080,headerHeight)

	console.log(logo)
	ctx.drawImage(logo,
		1080-(logo.width+(1080-logo.width)/2),
		headerHeight-(logo.height+(headerHeight-logo.height)/2)
	)
}

function calcRowStartY(paragNum, rowNum){ //paragNum: címek //rowNum: 0, ha cím
	return headerHeight + lineHeight + paragNum * titleSize + rowNum * (textSize + lineHeight)
}
function writeTitle(text, paragNum, rowNum){
	ctx.fillStyle = '#000'
	ctx.font = `${titleSize}px Arial`
	ctx.fillText(text, leftMargin, calcRowStartY(paragNum,rowNum))
}
function writeText(text, paragNum, rowNum){
	ctx.fillStyle = '#3c3c3c'
	ctx.font = `${textSize}px Arial`
	ctx.fillText(text, leftMargin+20, calcRowStartY(paragNum,rowNum))
}

function newTitle(text){
    sumPNum++
    writeTitle(text, sumPNum, sumRNum)
}
function newText(text){
    sumRNum++
    writeText(text, sumPNum, sumRNum)
}
function newEmptyLine(){
    sumPNum++
    writeTitle('', sumPNum, sumRNum)
}

function generateFromData(texts, dynamicValues){
	for(const text of texts){
		let repTitle = text.title
		let repRows = text.rows
		if(text.dynamic){
			repTitle = repTitle.replaceAll(`$${text.paramID}`, dynamicValues[text.paramID])
			repRows = repRows.map(t => t.replaceAll(`$${text.paramID}`, dynamicValues[text.paramID]))
		}
		newTitle(repTitle)
		repRows.forEach(r => newText(r))
		newEmptyLine()
	}
}

function drawQR(size){
	const qrcvs = qrdiv.querySelector('canvas')
	ctx.drawImage(qrcvs,
		0,0,qrOriginalSize,qrOriginalSize,
		1080-(size+((1080-size)/2)), 1920-(size+25),size,size
	)
}