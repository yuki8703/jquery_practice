$(function() {
    $("#q1").css("color", "green"); //読み込み時に文字の色変化
    $("#q2").on("click", function() { $(this).css("background", "green") }); //クリックしてボタンの色変更
    $("#q3").on("click", function() { $(this).fadeOut(3E3) }); //クリックしてフェードアウト
    $("#q4").on("click", function() { $(this).addClass("large") }); //クリックしてサイズ変更
    $("#q5").on("click", function() { $(this).prepend("") }); //クリックしてDOMの挿入
    $("#q6").on("click", function() { $(this).animate({ "margin-top": 100, "margin-left": 100 }, 2E3) }); //クリックして移動
    $("#q7").on("click", function() { console.log(this) }); //クリックしてidのノードをコンソールで表示
    $("#q8").on({ mouseenter: function() { $(this).addClass("large") }, mouseleave: function() { $(this).removeClass("large") } }); //ホバー時にサイズ変更
    $("#q9 li").on("click", function() {
        let a = $(this).index();
        alert(a)
    }); //クリックして配列のアラート表示
    $("#q10 li").on("click", function() {
            let a = $(this).index();
            console.log($("#q11 li").eq(a));
            $("#q11 li").eq(a).addClass("large-text")
        }) //Q10をクリックしてQ11を操作
});