let bg = document.querySelector('#bg'),
    banner = document.querySelector('.banner'),
    contenido1 = document.querySelector('.contenido1'), //-1393
    contenido = document.querySelector('.contenido');
window.addEventListener('scroll', () => {
    let value = window.scrollY,
        posicionObj = contenido1.getBoundingClientRect().top,
        alturaObj = window.innerHeight * 2;
    console.log(value);
    bg.style.backgroundSize = 450 + value * 1.5 + "px";
    if (value > alturaObj) {
        console.log('quitar fixed');
        banner.classList.remove('fix');

    } else {
        console.log('poner fixed');
        banner.classList.add('fix');

    }
})