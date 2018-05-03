
function getToken() {
	let url = window.location.href;
	let access_token = url.split('=');
	let token_type = access_token[1].split('&');
	let token = token_type[0];
	console.log(token);
}

//listen for submit
function listenForSubmit() {
	$('#container').submit('#search-btn', function(e) {
		e.preventDefault();
		let artist = $('#search-box').val();
		$('#search-box').val('');
		artistSearchAPI(artist,token);


	});
	//take value from form
}
//send to spotify
function artistSearchAPI(artist,token) {
	const settings = {
		url: 'https://api.spotify.com/v1/search',
		header: {
			Accept: "application/json",
			"Content-type" : "application/json",
			Authorization: `Bearer ${token}`
		},
		data: {
			q: artist,
			type: 'artist',
			limit: 20
		},
		success: function(response) {
			console.log(response);
		},
		error: function() {
			alert.error();
		}
	}
	$.ajax(settings);
}

//render results
function renderResults() {

}
//display results
function displayResults() {

}
//user picks correct artist
function listenForArtist() {

}
function renderAblum() {

}
//user picks album 
function listenForAlbum() {

}
//send to lyrics ovh
function getLyrics() {

}
//send to ticketmaster
function getEvents() {

}

//fill lyrics 
function renderLyrics() {

}
//fill events
function renderEvents() {

}
//load hud
function renderHUD() {

}
function displayHUD() {

}
//highlight start over
function highlightRestart() {

}
//run callbacks
function loadCallbacks() {
	listenForSubmit();
	getToken();
};

$(loadCallbacks);
