
fetch('/api/ticker/')
	.then(response => response.json())
	.then(result => {
		console.log(result);
	})