document.querySelectorAll('.b-a-container').forEach(container => {
    const slider = container.querySelector('.b-a-slider');

    // Set initial position
    container.style.setProperty('--position', `${slider.value}%`);

    // Update position on slider input
    slider.addEventListener('input', (e) => {
        container.style.setProperty('--position', `${e.target.value}%`);
    });

    // Show/hide labels on interaction
    const showLabels = () => container.classList.add('show-labels');
    const hideLabels = () => container.classList.remove('show-labels');

    slider.addEventListener('mousedown', showLabels);
    slider.addEventListener('touchstart', showLabels);

    document.addEventListener('mouseup', hideLabels);
    document.addEventListener('touchend', hideLabels);
});