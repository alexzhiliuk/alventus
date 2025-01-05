import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

const swiperCertificates = new Swiper('.certificates', {    
    // slidesPerView: "auto",
    spaceBetween: 10,
    // centeredSlides: false,
    loop: true,

    breakpoints: {
        576: {
            slidesPerView: 3,
            centeredSlides: true,
        }
    },

});