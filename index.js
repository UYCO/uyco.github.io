$(window).scroll(function () {
    var pos = $(window).scrollTop() + 1;

    $(".parralax").css("background-position", "0 " + (-pos * 0.5 -66.3) + "px");
});
