import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
}
