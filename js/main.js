$(document).ready(function () {
    $("#menu-icon").click(function() {
        $(".menu").toggle();
    });
});


$(function () {
    $('.mother-row').each(function () {
        let heighest = 0;
        $('.col-6', this).each(function () {
            if ($(this).height() > heighest) {
                heighest = $(this).height();
            }
        });
        $('.mother-row', this).height(heighest);
    });
});