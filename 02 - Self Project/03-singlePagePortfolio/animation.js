document.addEventListener('DOMContentLoaded', () => {
    const mainLoaded = document.querySelector('.main-document');
    setTimeout(() => {
        mainLoaded.classList.add('is-loaded');
    }, 1000)
})