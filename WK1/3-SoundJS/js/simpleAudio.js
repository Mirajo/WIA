window.onload = function() {

	
	if(!createjs.Sound.initializeDefaultPlugins()){return;};

	   //SoundJS Preload sounds

	createjs.Sound.registerSound({id:"soundId", src:"audio/music.mp3|audio/music.ogg"});

       //Listen for file load

	  createjs.Sound.addEventListener("fileload", handleFileLoad);

	 function handleFileLoad(event){

		 //A sound has loaded
		 console.log("preloaded:", event.src);

		 //play the loaded sound
		 //createjs.Sound.play(event.src);

	     }
	}
function playMusic(){
	//play music on click

	createjs.Sound.play("soundId");

}