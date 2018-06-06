 $( document ).ready(function() {
 	console.log( "change active navbar tittle" );
 	var $sel = $( document.body ).attr('id')
 	switch($sel) {
 		case "home":
 		$( "#li_home" ).addClass("active");
 		break;
 		case "blog":
 		$( "#li_blog" ).addClass("active");
 		break;
 		case "project":
 		$( "#li_project" ).addClass("active");
 		break;
 		case "resume":
 		$( "#li_resume" ).addClass("active");
 		break;
 		default:
 	}
 });



