$(function() {
    $(".drawer_button").click(function() {
        $(this).toggleClass("active");
        $(".drawer_bg").fadeToggle();
        $("nav").toggleClass("open")
    });
    $(".drawer_bg").click(function() {
        $(this).hide();
        $(".drawer_button").removeClass("active");
        $("nav").removeClass("open")
    })
});