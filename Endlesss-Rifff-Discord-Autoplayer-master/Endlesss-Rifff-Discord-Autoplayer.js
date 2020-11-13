(function() {

// Function to auto-play another video element
function autoPlay(i){
    var y = document.getElementsByTagName("video");
    var z;
    for (z = 0; z < y.length; z++) {
        document.getElementsByTagName("video")[z].pause();
    }
    if (i >= document.getElementsByTagName("video").length){ //don't go too far
        i = document.getElementsByTagName("video").length;
    }
    window.videoindex = i;
	document.getElementsByTagName("video")[i].scrollIntoView();
	// document.getElementsByTagName("video")[i].setAttribute("autoplay", " ");
    // document.getElementsByTagName("video")[i].load();
    document.getElementsByTagName("video")[i].play();
    if(document.getElementsByTagName("video")[i].hasAttribute("loop")){ // skip animated GIF video elements
    	if (i !== 0){
    		autoPlay(i-1);
    	}
    }
    document.getElementsByTagName("video")[i].onended = function() { //start next video when current video has ended
    	if (i !== 0){
    		autoPlay(i-1);
    	}
    }
    document.onkeyup = function(e) {

      if (e.ctrlKey && e.which == 38) { // control + up arrow for previous video on the page
        if (window.videoindex !== 0){
        		autoPlay(window.videoindex-1);
        }
      } 
      if (e.ctrlKey && e.which == 40) { // control + down arrow for next video on the page
        if (window.videoindex < document.getElementsByTagName("video").length-1){
            if(document.getElementsByTagName("video")[i].hasAttribute("loop")){
                if (i + 1 < document.getElementsByTagName("video").length-1){
                    autoPlay(i+1);
                }

            }
            else {
        		autoPlay(window.videoindex+1);
            }
        }
        else{
            autoPlay(window.videoindex);
        }
      } 
      if (e.ctrlKey && e.which == 37) { // ctrl + left arrow starts the first video element
        autoPlay(0);
      } 
      if (e.ctrlKey && e.which == 39) { // ctrl + right arrow starts the last video elemen
        autoPlay(document.getElementsByTagName("video").length-1);
      } 
      
    };
}


document.onkeyup = function(e) {
  if (e.ctrlKey && e.which == 37) { // ctrl + left arrow starts the first video element
    autoPlay(0);
  } 
  if ((e.ctrlKey && e.which == 39) || ((e.ctrlKey && e.which == 38)) || (e.ctrlKey && e.which == 40)) { // ctrl + right or up or down arrow starts the last video element
    autoPlay(document.getElementsByTagName("video").length-1);
  } 
};

console.log('Video Auto-player Extension Loaded');
})();
