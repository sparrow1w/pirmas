var $document = $(document),
$element = $('.container-fluid'),
className = 'hasScrolled';

$document.scroll(function() {
if ($document.scrollTop() >= 100) {
$element.addClass(className);

} else {
$element.removeClass(className);
}
});

$(".about").click(function() {
    $('html, body').animate({
        scrollTop: $(".container-1").offset().top
    }, 1000);
});

$(".jobs").click(function() {
    $('html, body').animate({
        scrollTop: $("#myCarousel").offset().top
    }, 1000);
});

$(".skills").click(function() {
    $('html, body').animate({
        scrollTop: $(".container-2").offset().top
    }, 1000);
});

$(".info").click(function() {
    $('html, body').animate({
        scrollTop: $(".pageBottom").offset().top
    }, 1000);
});