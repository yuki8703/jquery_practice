//ドロワーメニュー
$(function() {
    $(".nav-item").click(function() {
        let a = $(".nav-item").index(this);
        $(".description li").addClass("is-hidden");
        $(".description li").eq(a).removeClass("is-hidden")
    })
});