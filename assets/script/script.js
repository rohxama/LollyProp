$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="./assets/media/right.png" class="right-arrow">',
    nextArrow: '<img src="./assets/media/left.png" class="left-arrow">',
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const crossIcon = document.querySelector(".cross");

    toggleButton.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    crossIcon.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});





