$(".header__burger").click( function() {
    $(this).toggleClass("header__burger_active")
    $(".header").toggleClass("header_open")
    $("body, html").toggleClass("lock-clip")
})