$(function() {
    $('.modal_open_button').on('click', function() {
        $('.modal_win').fadeIn();
        return false;
    });
    $('.modal_close_button').on('click', function() {
        $('.modal_win').fadeOut();
        return false;
    });
});