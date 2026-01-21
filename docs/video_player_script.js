document.querySelectorAll('[data-player]').forEach(player => {

    const video = player.querySelector('video');
    const playBtn = player.querySelector('.play-btn');
    const seekBar = player.querySelector('.seek-bar');

    /* --- when metadata loads, set slider range --- */
    video.addEventListener('loadedmetadata', () => {
        seekBar.max = video.duration;
    });

    /* --- play / pause button --- */
    playBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playBtn.textContent = '❚❚';
        } else {
            video.pause();
            playBtn.textContent = '▶︎';
        }
    });

    /* --- update slider as video plays --- */
    video.addEventListener('timeupdate', () => {
        if (!seekBar.dragging) {
            seekBar.value = video.currentTime;
        }
    });

    /* --- user drags slider --- */
    seekBar.addEventListener('input', () => {
        video.currentTime = seekBar.value;
    });

    /* --- reset icon on loop --- */
    video.addEventListener('ended', () => {
        playBtn.textContent = '▶︎';
    });

});



