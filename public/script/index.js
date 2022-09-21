//-----------------------------------------------------
// Carousel init
$(document).ready(function () {
    $(".testimonial-carousel").slick({
        speed: 300,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:
            "<button class='a-left control-c prev slick-prev'><img src='/img/arrow-left.svg'></button>",
        nextArrow:
            "<button class='a-right control-c next slick-next'><img src='/img/arrow-right.svg'></button>",
    });
});

// Scroll offset with navbar
let sidebarElements = document.getElementById("sidebar-marker").children;
let topNavElements = document.getElementById("nav-marker").children;
let footerNavElements =
    document.getElementById("footer-nav-marker").children;
let navElements = [
    ...topNavElements,
    ...footerNavElements,
    ...sidebarElements,
];

for (key in navElements) {
    navElements[key].addEventListener("click", function (ev) {
        var element = ev.target || ev.srcElement;
        var targetSection = element.getAttribute("data-target");

        window.scrollTo(
            0,
            document.getElementById(targetSection).offsetTop - 100
        );
    });
}