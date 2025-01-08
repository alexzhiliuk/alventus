function closeSearch() {
    $("#shadowSearch").remove()
    $(".open-search").removeClass("open-search_active")
}

$(".open-search").click(function() {
    $(this).addClass("open-search_active")

    let shadow = $("#shadowSearch")
    if (shadow.length === 0) {
        shadow = $("<div id='shadowSearch' style='background: rgba(0, 0, 0, 0.5); position: fixed; inset: 0; z-index: 7;'></div>")
        $("body").append(shadow)
    }
    
})

$(window).click(function() {
    closeSearch()
});
  
$('.search, .open-search').click(function(event){
    event.stopPropagation();
});
