//user needs to authenticate 
function listenForLogin() {
	$('#container').submit('#login-button', function(e) {
		e.preventDefault();
		console.log("button squelched");
		window.location.href = "https://accounts.spotify.com/authorize?client_id=4f0988fdbe304564abc71c130d26702f&redirect_uri=https://blubagoo.github.io/listen-and-watch/logged-in.html&scope=user-read-private%20user-read-email&response_type=token"

	});
}

//run callbacks
function loadCallbacks() {
	listenForLogin();
}

$(loadCallbacks);
