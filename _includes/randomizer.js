
var urls = data.map(t => t.slug);

window.setRandomURL = function() {
	window.location = '/' + urls[Math.floor((Math.random()*urls.length))];
}