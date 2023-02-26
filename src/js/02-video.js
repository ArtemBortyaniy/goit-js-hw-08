import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoContainer = document.querySelector('#vimeo-player');
const LOCALSTORAGE_KEY  = "videoplayer-current-time";

const player = new Player(videoContainer);  

function saveTimeVideo(e) {
    localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}

player.on('timeupdate', throttle(saveTimeVideo, 1000));
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);

