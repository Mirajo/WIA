$(document).ready(function() {
$(".gallery_thumbnails a ").click(function(e){
    // disable links

    e.preventDefault();

    //create variables to hold links
    var photo_fullsize = $(this).attr("href");

    //create varible for caption

    var photo_caption = $(this).attr("title");

    //create a preview link

    var photo_preview = photo_fullsize.replace("_fullsize", "_preview");

    //slide the caption
    $(".gallery_caption").slideUp(500);

    // fade out the preview area

    $(".gallery_preview").fadeOut(500,function(){
        //prelad our clicked image

        $(".gallery_preload_area").html('<img src="'+photo_preview+'"/>');

        //Test for it and wait to load and use it.

        $(".gallery_preload_area img").imgpreload(function(){

            //change the picture and linke for preview

            $(".gallery_preview").html('<a class="overlayLink" title="'+photo_caption+'" href="'+photo_fullsize+'" style="background-image:url('+photo_preview+');"></a>');

            //fade back in the preview window

            $(".gallery_preview").fadeIn(500);

            $(".gallery_caption").html('<p><a class="overlaylink zoom" title="'+photo_caption+'" href="'+photo_fullsize+'">View Larger</a></p><p>'+photo_caption+'</p>');

            //slide the caption back down
            $(".gallery_caption").slideDown(500);

            setFancyBoxLinks();

            updateThumbnails();


           });
        });
    }); //end of click

    //create first variables
        var first_photo_caption = $(".gallery_thumbnails a").first().attr("title");
        var first_photo_fullsize = $(".gallery_thumbnails a").first().attr("href");

        var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");
    //set the caption and the photo

    $(".gallery_preview").html('<a class="overlayLink" title="'+first_photo_caption+'" href="'+first_photo_fullsize+'" style="background-image:url('+first_photo_preview+');"></a>');


    $(".gallery_caption").html('<p><a class="overlaylink zoom" title="'+first_photo_caption+'" href="'+first_photo_fullsize+'">View Larger</a></p><p>'+first_photo_caption+'</p>');

    setFancyBoxLinks();
    updateThumbnails();

}); //ednd of ready



function setFancyBoxLinks(){
    $("a.overlayLink").fancybox({
        'titlePosition': 'over',
        'overlayColor':'#000',
        'overlayOpacity':.8,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'autoScale': true

    });
}

function updateThumbnails(){
    $(".gallery_thumbnails a").each(function(index){

        if($(".gallery_preview a").attr("href")==$(this).attr("href")){
            //the anchor tag is the same as preview tag shade the thumbnail change class to selected

        $(this).addClass("selected");
            $(this).children().fadeTo(250,.4);


        }else{
            //removed the selected class and fade up to 100% opactity

            $(this).removeClass("selected");
            $(this).children().css("opacity", 1);

        }
    });

};
