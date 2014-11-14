$(function() { 
	$("#fadeout").click(function(){
        $("#theDiv").fadeOut("normal");

    });
	
           $("#fadein").click(function(){
            $("#theDiv").fadeIn("fast");

    });

        $("#fadeto3").click(function(){
            $("#theDiv").fadeTo(2000,.3);
    });

      $("#fadeup").click(function(){
          $("#theDiv").fadeTo(2000, 1, function(){
              alert("The Div is back to 100% opacity !!");

          });

      });
});