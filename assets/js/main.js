$(document).ready(function () {
    $('.clickme a').click(function () {
        $('.clickme a').removeClass('activelink');
        $(this).addClass('activelink');
        var tagid = $(this).data('tag');
        $('.list').removeClass('active').addClass('hide');
        $('#' + tagid).addClass('active').removeClass('hide');
    });
});
//popup
// $('.view').magnificPopup({
//     delegate: 'a', // child items selector, by clicking on it popup will open
//     type: 'image'
//     // other options
// });
//progress

$('.circlechart').circlechart();

//counter
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

