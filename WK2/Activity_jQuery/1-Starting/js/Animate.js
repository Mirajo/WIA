$(function() {
    $("#right").click(function () {
        $("#theDiv").animate({width: "500px"}, 1000);

    });
    $("#text").click(function () {
        $("#theDiv").animate({fontSize: "24pt"}, 1000);

    });

    $("#move").click(function () {
        $("#theDiv").animate({left: "500"}, 1000, "linear");

    });

    $("#multiple").click(function () {

            //animates all at once
        //$("#theDiv").animate({height: "500px", width: "500px", left: "500", fontSize: "24pt"}, 1000, "swing");
    });

        //animates events one by one
        $("#theDiv").animate({height:"500px"}, 1000, "swing");
        $("#theDiv").animate({width:"500px"}, 1000, "swing");
        $("#theDiv").animate({left:"500"}, 1000, "swing");
        $("#theDiv").animate({fontSize:"24pt"}, 1000, "swing");
});

        $("#reset").click(function(){
            //reset to initial values
            $("#theDiv").animate({height: "180px", width: "250px", left: "0", fontSize: "16pt"}, 1000, "swing");

        });