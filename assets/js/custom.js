var banner = new Swiper(".banner", {
    spaceBetween: 30,
    effect: "fade",
    speed: 2000,
    loop: true,
    autoplay: true,
});

var people = new Swiper(".people", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: true,
    slidesPerView: 3,
});

var stories = new Swiper(".stories", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: true,
    loop: true,
});

var partners = new Swiper(".partners", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: true,
    loop: true,
    slidesPerView: "auto",
});