window.onload = function() {
	if(!createjs.Sound.initializeDefaultPlugins()){return;};

			//variable for path to auto files

	var audioPath = "audio/";

	//create and object array
	//soundjs manifest

	var manifest = [
		{id: "Music", src:audioPath+"music.mp3|"+audioPath+ "music.ogg"},
		{id: "Thunder", src:audioPath+"Thunder1.mp3|"+audioPath+ "Thunder1.ogg"}
	];

	//Register the manifest
	createjs.Sound.registerManifest(manifest);

	//listen for the files to load
	createjs.Sound.addEventListener("fileload", handleLoad);

	function handleLoad(event){
    //run once each load


		//createjs.Sound.play(event.src);

	    }

	}

function playMusic(){

	//play the music
	createjs.Sound.play("Music");
}

function playThunder(){

	//play thunder
	createjs.Sound.play("Thunder");

}