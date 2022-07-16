$(function() {
    $('.btn__submit').on('click', function() {
        console.log($('#family__name').val());
        console.log($('#given__name').val());
        console.log($('.year').val());
        console.log($('.month').val());
        console.log($('.day').val());
        console.log($('[name="gender"]:checked').val());
        console.log($('.occupation').val());
        console.log($('#account__name').val());
        console.log($('#email').val());
        console.log($('#password').val());
        console.log($('#duplication__password').val());
        console.log($('#address').val());
        console.log($('#tel').val());
        console.log($('[name="subscription"]:checked').val());

    })
});