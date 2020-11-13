# endlesss-rifff-autoplayer-extension
CTRL + arrow keys for automatic playback of video elements

Enable developer mode to add the folder as a browser extension in your web browser.

Using CTRL + arrow keys will trigger the autoplay functionality.

Playback will go back in time scrolling up the page from the most recent video. Main reason for this is that discord will use AJAX to load in more content as you scroll up further.

Known issues: 
* autoplayback will lose it's place once discord loads in more content with AJAX as it is using a numerical index of all video elements loaded on the page
* only discord video elements are autoplayed (audio files and other embedded videos from other sites not included currently.
* videos still show the play button overlay when they are playing
