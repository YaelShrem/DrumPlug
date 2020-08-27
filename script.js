const KEYS_ARR = ['1', '2', '3', '4', '5', '6', '7', '8', '9' ];
const NOT_EXIST=-1;
const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', event => {
  if (event.repeat) return;
  const key = event.key;
  const keyIndex = KEYS_ARR.indexOf(key);
  if (keyIndex > NOT_EXIST)
  playNote(keys[keyIndex]);
})

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key));
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  })
}