$(document).ready(function() {
	
	$("#submitbutton").click(function(e) {
		/*
		var inData = {
			firstName: $('#firstName').val(),
			lastName: $('#lastName').val()
		};
		*/
		var inData = $('#inData').serialize();
		alert(inData);
		// Do submit here
	});
	
});