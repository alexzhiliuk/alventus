import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

const swiperGallery = new Swiper('#productGallery', {    
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    navigation: {
        prevEl: "#productGalleryPrev",
        nextEl: "#productGalleryNext"
    }

});

const swiperUsage = new Swiper('#usageSlider', {    
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,

    navigation: {
        prevEl: "#usagePrev",
        nextEl: "#usageNext"
    }

});

$(".product-filter__items").click(function() {
    if (window.innerWidth > 992) { return }

    $(this).toggleClass("product-filter__items_open")

    let shadow = $("#shadowFilter")
    if (shadow.length === 0) {
        shadow = $("<div id='shadowFilter' style='background: rgba(0, 0, 0, 0.5); position: fixed; inset: 0; z-index: 7;'></div>")
        $("body").append(shadow)
    } else {
        shadow.remove()
    }
})

$(window).click(function() {
    $(".product-filter__items").removeClass("product-filter__items_open")
    $("#shadowFilter").remove()
});
  
$(".product-filter__items").click(function(event){
    event.stopPropagation();
});

