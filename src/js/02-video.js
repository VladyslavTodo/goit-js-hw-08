import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(currentTime, 1000));

const play = localStorage.getItem('videoplayer-current-time');
if (play) {
  player.setCurrentTime(play);
}

function currentTime(time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
}
