//user selects to search by artist and title or just to search for a particular artist
//listen for selection
function displayCorrectForm(){
	$('#form-area').on('click', '#artist-form-btn', function(e) {
		$('#form').remove();
		$('#form-area').html(renderArtistForm);
	});
	$('#form-area').on('click', '#artist-title-form-btn', function(e) {
		$('#form').remove();
		$('#form-area').html(renderArtistTitleForm);
	});
}
function renderArtistForm() {

}
function renderArtistTitleForm() {

}
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
