import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const videoContainer = document.querySelector('#vimeo-player');
const LOCALSTORAGE_KEY  = "videoplayer-current-time";

const player = new Player(videoContainer);  

const jsoncurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
const currentTime = JSON.parse(jsoncurrentTime);

player.on('timeupdate', throttle(saveTimeVideo, 1000));

function saveTimeVideo(e) {
    localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}

player.setCurrentTime(currentTime).then(function() {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

