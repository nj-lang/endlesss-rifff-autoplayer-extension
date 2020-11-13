# endlesss-rifff-autoplayer-extension
CTRL + arrow keys for automatic playback of video elements on the Endlesss discord server

To use, enable developer mode in your browser extension settings in your web browser and load the unpacked folder containing these files.

Using CTRL + up and CTRL + down will activate auto-playback and allow you to navigate in either direction. When the video has ended it will automatically start playing the next <video> element. 

Playback will go back in time scrolling up the page.

Known issues: 
* autoplayback will lose it's place once discord loads in more content with AJAX as it is using a numerical index of all video elements loaded on the page
* only discord video elements are autoplayed (audio files and other embedded videos from other sites not included currently.
* videos still show the play button overlay when they are playing
