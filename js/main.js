$(window).load(function(){
	$("#wrapper").animate({
		opacity: 1
	});
});

function swap() {
	clearTimeout( t );
	
	if( $("#gif").hasClass("on") ) {
		$("#gif").removeClass("on");
	} else {
		$("#gif").addClass("on");
	}

	t = setTimeout(function(){
		swap();
	}, 1500);
}

var t;
$(document).ready(function() {
	t = setTimeout(function(){
		swap();
	}, 1500);
});