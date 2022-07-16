$(function() {
    $('.modal_open_button').on('click', function() {
        $('.modal_win').fadeIn(); //OPEN押したらモーダルが開く
        return false;
    });
    $('.modal_close_button').on('click', function() {
        $('.modal_win').fadeOut(); //×ボタン押したら閉じる
        return false;
    });
});