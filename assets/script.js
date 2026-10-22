(() => {
  const video = document.querySelector('.hero__video');
  const button = document.querySelector('.motion-toggle');
  const icon = document.querySelector('.motion-toggle__icon');
  if (!video || !button || !icon) return;

  const setPausedState = (paused) => {
    icon.textContent = paused ? '▶' : 'Ⅱ';
    button.setAttribute('aria-label', paused ? 'Play background motion' : 'Pause background motion');
    button.setAttribute('title', paused ? 'Play background motion' : 'Pause background motion');
  };

  button.addEventListener('click', async () => {
    if (video.paused) {
      try {
        await video.play();
        setPausedState(false);
      } catch {
        setPausedState(true);
      }
    } else {
      video.pause();
      setPausedState(true);
    }
  });

  video.addEventListener('pause', () => setPausedState(true));
  video.addEventListener('playing', () => setPausedState(false));
})();
