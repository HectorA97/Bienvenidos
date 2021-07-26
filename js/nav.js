// Variables

let nav = document.getElementById('navbar');

function menus() {
    let Desplazamiento_Actual = window.pageYOffset;

    if (Desplazamiento_Actual <= 20) {
        nav.classList.remove('navbar2');
        nav.className = ('navbar1');
        nav.style.transition = '0.4s';
        
    } else {
        nav.classList.remove('navbar1');
        nav.className = ('navbar2');
        nav.style.transition = '0.4s';
        
    }
}

window.addEventListener('load', function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('scroll', function() {
    console.log(window.pageYOffset);
    menus();
});