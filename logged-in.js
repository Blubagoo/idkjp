
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
		console.log(artist);
		artistSearchAPI(artist,token);
	});
}


//send to spotify
function artistSearchAPI(artist, token) {
	const settings = {
		url: 'https://api.spotify.com/v1/search',
		headers: {
			Accept: "application/json",
			"Content-type" : "application/json",
			Authorization: "Bearer BQCMX18K_SYwYxhnDEUH3nJMPzBshT5zGbEtUIBL-QENCPGOnWTcnckMfeqhCE43oeiYMO2fZR9qZERb2FZH9lcrNvwrcaajMmltn4mk_1tA64de3SfeEb7JuUoGuGVEashDmSCj_XzGPI1PFkdtldbkIMTC"

		},
		data: {
			q: artist,
			type: 'artist',
			limit: 20
		},
		dataType: 'json',
		method: 'GET',
		success: function(data) {
			console.log(data);
			displayResults(data);
		},
		error: function() {
			console.log(arguments);
		}
	}
	$.ajax(settings);
}

//render results
function renderResults(item) { //fix jquery tags
return `
	<div id="artist-results">
		<img src="${item.artist.items.images[0].url}" class="images" alt="${item.artist.items.name}">
		<p align="center" class="title"> ${title}</p>`;
}
//display results
function displayResults(data) {
	let results = data.artist.map((item, index) => renderResults(item));
	$()
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
function getEvents(artist) {
	const settings = {
		url: "https://app.ticketmaster.com/discovery/v2/attractions",
		headers: {
			apikey: "foT0mqx1A21ZxgjogM48Svp5vNF7gbgy"
		},
		data: {
			keyword: artist
		},
		async: true,
		dataType: "JSON",
		method:"GET",
		success: function () {
			console.log("success", data);
			renderEvents(data);
		},
		error: function() {
			console.log(arguments);
		}
	};
	$.ajax(settings)
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
