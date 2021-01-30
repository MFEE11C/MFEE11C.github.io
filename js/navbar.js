
$(".nav-burger").on("click", function () {
    $(".wrapper").toggleClass("active");
    $(this).toggleClass("active");
    $("body").toggleClass("active");
    // $(this).siblings().toggleClass("d-none");    
});
