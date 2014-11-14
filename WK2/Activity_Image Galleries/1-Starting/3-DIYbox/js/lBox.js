window.onload = function() {
	$(".lightbox_trigger").click(function(e){
        //prevent default actions (none clicakable)
        e.preventDefault();

        //get clicked links href

        var image_href = $(this).attr("href");
        //console.log(image_href);

        //setup lightbox or use the lightbox

        if($("#lightbox").length>0){
            //lightbox is present

            //place clicked href into image tag

            $("#content").html('<img src="'+image_href+'"/>');
             $("#lightbox").slideDown(500);

        }else{
            //firs time lightbox will not exist, so create it

            var lightbox=
                '<div id="lightbox">' +
                    '<p> Click to Close</p>' +
                    '<div id="content">' +
                    //insert clicked link href into images
                    '<img src="'+image_href + '" />'+
                    '</div>' +
                    '</div>';

            //insert lightbox html

            $("body").append(lightbox);
            $("#lightbox").hide();
            $("#lightbox").slideDown(500);

        }
    });

            $("#lightbox").live('click', function(){
                $("#lightbox").slideUp(1000);

            });

};