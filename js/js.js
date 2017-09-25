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
        scrollTop: $(".pageJobs").offset().top
    }, 1000);
});

$(".skills").click(function() {
    $('html, body').animate({
        scrollTop: $(".pageSkills").offset().top
    }, 1000);
});

$(".info").click(function() {
    $('html, body').animate({
        scrollTop: $(".pageBottom").offset().top
    }, 1000);
});


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 200;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};