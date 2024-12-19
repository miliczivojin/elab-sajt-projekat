window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const visina = document.getElementById('pozadina-slika').offsetHeight;

    if (window.scrollY > visina) {
        header.classList.add('skrol');
    } else {
        header.classList.remove('skrol');
    }
});

