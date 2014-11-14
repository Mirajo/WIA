$(function() { 
     //Click function
    $("#hide").click(function(){
        $("#theDiv").hide("fast", function(){

            //alert("The div is hidden sound the alarm !!");
            $("#theDiv").css("background-color", "red");
        });

    });

    $("#show").click(function(){
        $("#theDiv").show("normal");

    });

    $("#toggle").click(function(){
        $("#theDiv").toggle("slow");

    })

});


