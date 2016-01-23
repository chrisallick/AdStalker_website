$(window).load(function(){
	$("#wrapper").animate({
		opacity: 1
	});
});

var ie = false;
$(document).ready(function() {

	ie = getInternetExplorerVersion() > 0 : true ? false;
});