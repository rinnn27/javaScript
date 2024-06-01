// navbar scroll (animasi bagian 'pasti ada sesuatu buat kamu')
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

var swiper = new Swiper(".menu", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 3,
        },
    }
  });



