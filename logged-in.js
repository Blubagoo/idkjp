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
 return `
 	<div id="artis-form">
		<form role="form">
			<a id="artist-form-btn">Artist</a><a id="artist-title-form-btn">Artist + Title</a><br>
			<input type="text" name="search-box" required>
			<button type="submit" id="search-btn">Listen In</button>
			<button type="button" id="back-btn">Back</button>
		</form>
	</div>`
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
