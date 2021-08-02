// cuando demos click en el menu hamburguesa despliegue o esconda el menu
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

//cuando de da scroll van aparenciendo los elemtos de la parte baja https://scrollrevealjs.org/guide/hello-world.html
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:500});
ScrollReveal().reveal('.cards-banner-one', {delay:500});
ScrollReveal().reveal('.cards-banner-two', {delay:500});
