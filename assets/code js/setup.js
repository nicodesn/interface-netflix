$('.playPause').click(function () {
    var mediaVideo = $("#video-play").get(0);
    if (mediaVideo.paused) {
        mediaVideo.play();
    } else {
        mediaVideo.pause();
   }
 });
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:3
        },
        800:{
            items:5
        }
    }
})

const btnMobile = document.getElementById('menu-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const navMobile = document.getElementById('nav-mobile');
    navMobile.classList.toggle('active');
    const active = navMobile.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);  
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'fechar nav-list');
    }else{
        event.currentTarget.setAttribute('aria-label', 'abrir nav-list');
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const parentContainer = document.querySelector('.descricao-info');

parentContainer.addEventListener('click',  event=> {

    const current = event.target;

    const btnLerMais = current.className.includes('btn-mais');
    if(btnLerMais) return;

    const currentText = event.target.parentMode.querySelector('.mais-informacoes');

    currentText.classList.toggle('.ler-mais-text');
})