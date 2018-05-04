
function getToken() {
	let url = window.location.href;
	let access_token = url.split('=');
	let token_type = access_token[1].split('&');
	let token = token_type[0];
	console.log(token);
	listenForSubmit(token);
}

//listen for submit
function listenForSubmit(token) {
	$('#container').submit('#search-btn', function(e) {
		e.preventDefault();
		let artist = $('#search-box').val();
		$('#search-box').val('');
		artistSearchAPI(artist,token);


	});
	//take value from form
}
//send to spotify
function artistSearchAPI(artist, token) {
	const settings = {
		url: 'https://api.spotify.com/v1/search',
		headers: {
			Accept: "application/json",
			"Content-type" : "application/json",
			Authorization: `Bearer ${token}`
		},
		data: {
			q: artist,
			type: 'artist',
			limit: 20
		},
		dataType: 'json',
		method: 'GET',
		success: function(response) {
			console.log(response);
		},
		error: function() {
			console.log(arguments);
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
function getLyrics(artist, title) {
	const settings = {
		url:"https://api.lyrics.ovh/v1/",
		data: {
			artist: artist,
			title: title 
		},
		dataType: "JSON",
		method: "GET",
		success: function() {
			console.log("success", data);
		},
		error: function() {
			console.log(arguments);
		}
	}
	$.ajax(settings);
}
//send to ticketmaster
function getEvents() {
	const settings = {
		url:
		data: {

		},
		dataType: "JSON",
		method:"GET",
		success: function () {
			console.log("success", data);
		},
		error: function() {
			console.log(arguments);
		}
	}
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
	
};

$(loadCallbacks);
