$(document).ready(function(){
	$("#btn-send").on("click",function(){
		 var token = $( 'meta[name="csrf-token"]' ).attr( 'content' );
		 
		  $.ajaxSetup( {
		    beforeSend: function ( xhr ) {
		      xhr.setRequestHeader( 'X-CSRF-Token', token );
		    }
		  });
		var newPost = {
			comment: $(this).siblings("#comment-field").val(),
			user:  $(this).siblings("#user-field").val(), 
			city:   $(this).siblings("#city-field").val()
		}
		currentChainID = $(this).attr("name")

		$.ajax({
			type: "POST",
			url: "http://localhost:3000/chains/"+currentChainID+"/userposts",
			data: newPost,
			success: function(response){location.reload()},
	        error: function(response){console.log("error: " + response)},
	        dataType: "json"
		})
	});

	$("#button-send").on("click",function(){
		var newChain = {
			name: $("#name-field").val(),
			date: $("#date-field").val(), 
			description: $("#description-field").val()

		}

		$.ajax({
			type: "POST",
			url: "http://localhost:3000/chains",
			data: newChain,
			dataType: "json",
			success: function(){console.log("Chain created")},
	        error: function(){console.log("Error chain")}	        
		});
	});
	
});







