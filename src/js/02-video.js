import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(KEY);

const onPlay = function (data) {
  localStorage.setItem(KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 250));

if (currentTime) {
  player
    .setCurrentTime(currentTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
