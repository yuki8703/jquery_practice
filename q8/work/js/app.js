$(function() {
    let searchWord;
    let pageCount = 1;

    // API
    const settings = {
        "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
    }

    $.ajax(settings).done(function(response) {
        const result = response['@graph'];
        displayResult(result)
    }).fail(function(err) {
        displayError(err)

        $(".reset-btn").on("click", function() {
            $(".lists").empty();
            $(".message").remove();
            $("#search-input").val("")
        });
    });
});