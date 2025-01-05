import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


function moveProductCards() {
    $('.product-card').clone().appendTo('.production__mobile');
}

moveProductCards()


const swiperProduction = new Swiper('.production__swiper', {    
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        576: {
            slidesPerView: "auto",
            spaceBetween: 16, 
        }
    },

    navigation: {
        prevEl: ".production__nav-btn_prev",
        nextEl: ".production__nav-btn_next"
    }
});