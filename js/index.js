$( document ).ready(function() {
	
	$("div").click(function() {
		$("#"+this.id).not("#main_wrapper, #inner_wrapper, #main_title, #reload_wrapper").fadeOut( "slow", function() {
		});
		// $("div").not("#main_wrapper, #inner_wrapper").remove("#"+this.id);
	});
	
});

function show(){
	$("#cube_01, #cube_02, #cube_03").css( "display", "inline-block" );
}