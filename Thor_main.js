const urlParams = new URLSearchParams(window.location.search)
const regID = urlParams.get('id')
const regName = urlParams.get('name')
const dynamicValues = []

function main(){
	if(!regID || !regName){
		document.body.innerText = 'Vmi error message.'
	}else{
		dynamicValues['param1'] = regName
		generateTicket(regID, dynamicValues)
	}
}

setTimeout(main, 100)