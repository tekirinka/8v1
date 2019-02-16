type = (new URL(location.href)).searchParams.get("t")

xhr = new XMLHttpRequest()

xhr.responsetype='blob'

xhr.open('GET', "https://homework-63c7.restdb.io/media/" + type)

xhr.onload = (stat) => {
	if (!xhr.response) {
		console.error(stat)
		return
	}
	$('#img').src = xhr.response
}
