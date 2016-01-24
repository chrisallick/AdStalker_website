$(window).load(function(){
	$("#wrapper").animate({
		opacity: 1
	});

	t = setTimeout(function(){
		swap();
	}, 1500);
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

function info() {
	if( $("#about").hasClass("show") ) {
		$("#about").removeClass("show");
		$("#gif").addClass("show");
	} else {
		$("#about").addClass("show");
		$("#gif").removeClass("show");
	}
}

var t;
$(document).ready(function() {
	$("#info").click(function(event){
		info();
		return false;
	});
});