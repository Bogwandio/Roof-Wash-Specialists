const container = document.querySelector('.b-a-container');
document.querySelector('.b-a-slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})