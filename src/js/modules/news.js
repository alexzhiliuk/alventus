import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

const swiperNews = new Swiper('#newsSlider', {    
    slidesPerView: "auto",
    spaceBetween: 10,
    // loop: true,

});