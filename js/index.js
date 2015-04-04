$( document ).ready(function() {
	
	$("div").click(function() {
		$("#"+this.id).not("#main_wrapper, #inner_wrapper").fadeOut( "slow", function() {
		});
	});
	
});