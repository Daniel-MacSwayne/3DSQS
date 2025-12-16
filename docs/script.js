document.querySelectorAll('.video-compare').forEach(wrapper => {
    const topVideo = wrapper.querySelector('.video-top');
    const slider = wrapper.querySelector('.slider-line');

    wrapper.addEventListener('mousemove', e => {
        const rect = wrapper.getBoundingClientRect();
        let x = e.clientX - rect.left;

        x = Math.max(0, Math.min(x, rect.width));
        const pct = (x / rect.width) * 100;

        topVideo.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
        slider.style.left = pct + "%";
    });
});
