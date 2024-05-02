$(document).ready(function () {
let homeEnd = $("#About").offset().top;
console.log(homeEnd);

$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > homeEnd - 80) {
        $("#mainNav").css({ backgroundColor: "rgba(0, 0, 0)", padding: "0 20px" });
        $("#buttonUp").fadeIn(400);
    } else {
        $("#mainNav").css({ backgroundColor: "transparent", padding: "0" });
        $("#buttonUp").fadeOut(400);
    }
});

$("a[href^='#']").click((e) => {
    let x = $(e.target).attr("href");
    console.log(x);
})
$("#buttonUp").click(() => {
    $(window).scrollTop("0");
})


    $(".loader").fadeOut(1000,()=>{
        $("#Loading").fadeOut(1200)
        $("body").css("overflow","auto");
    });

});