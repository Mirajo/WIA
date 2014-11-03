//create a variable to hold the video

var vid;

window.onload=function(){
    //link to the video
    vid= document.getElementById("vid");

  }

function pauseToggle() {

    //Test the video
    //.paused property

    if (vid.paused) {
        //play the video
        vid.play();


    } else {
        //pause the video
        vid.pause();
    }

    function clicked(){

        //currentTime = current play time in sec
        //jump ahead 2 sec on click

        vid.currentTime +=2;
    }
}
