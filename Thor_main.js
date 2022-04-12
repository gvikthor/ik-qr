const urlParams = new URLSearchParams(window.location.search)
const regID = urlParams.get('id')
const dynamicValues = []

function main(){
	if(!regID){
		document.body.innerText = 'Vmi error message.'
	}else{
		generateTicket(regID, dynamicValues)
	}
}

setTimeout(main, 100)