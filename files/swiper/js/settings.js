const home_slider = document.querySelector('.home-slider')
if (home_slider) {
   new Swiper(home_slider, {
      pagination: {
         el: '.home-slider-pagination',
         clickable: true
      },
      watchOverflow: true,
      speed: 800,
      loop: true,
      effect: 'slide',
      fadeEffect: {
         crossFade: true
      },
      preloadImages: true,
      lazy: true,
      autoplay: {
         delay: 8000,
      },
      breakpoints: {
         300: {
            slidesPerView: 1.135,
            slidesPerGroup: 1,
            spaceBetween: 8,
            centeredSlides: true,
         },
         576: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 40,
            centeredSlides: false,
            effect: 'fade',
            fadeEffect: {
               crossFade: true
            },
         }
      }
   })
}