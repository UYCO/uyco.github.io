$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    $(".parralax").css("background-position", "0 " + (-scrollPosition * 0.5 - 66.3) + "px");

    if(scrollPosition > 100){
        $("nav").css("background-color", "#333")
    }
    else{
        $("nav").css("background-color", "initial")
    }
});
