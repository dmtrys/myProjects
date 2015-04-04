$( document ).ready(function() {
	
	$("div").click(function() {
		$("#"+this.id).not("#main_wrapper").fadeOut( "slow", function() {
		});
	});
	
});