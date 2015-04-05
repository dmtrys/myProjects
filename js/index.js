function check(){
	if( $("#cube_03").css('display') == 'none'&&$("#cube_02").css('display') == 'none'&&$("#cube_01").css('display') == 'none'){
		//alert('none');
		$("#reload").css( "display", "inline-block" );
	}
	else{
		//alert('block');
	}
}

$( document ).ready(function() {
	
	$("div").click(function() {
		$("#"+this.id).not("#main_wrapper, #inner_wrapper, #main_title, #reload_wrapper").fadeOut( "slow", function() {
		check();
		});
	});
	
	$("#main_title").click(function() {
		$( "#inner_wrapper" ).animate({ "left": "-=930px" }, 1000 );
	});
});

function show(){
	$("#reload").css( "display", "none" );
	$("#cube_01, #cube_02, #cube_03").css( "display", "inline-block" );
}