let url = window.location.href;
let access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
console.log(access_token);

//listen for submit
function listenForSubmit() {

	//take value from form
}
//send to spotify
function artistSearchAPI(artist) {

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
	displayCorrectForm();
	listenForSubmit();
}

$(loadCallbacks);
