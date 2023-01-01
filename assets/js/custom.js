var banner = new Swiper(".banner", {
    spaceBetween: 30,
    effect: "fade",
    speed: 2000,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: true,
});

var people = new Swiper(".people", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    loop: true,
    autoplay: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
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

document.querySelectorAll('marquee').forEach(ele => {
    ele.onmouseover = (e) => {
        e.target.stop();
    }
    ele.onmouseout = (e) => {
        e.target.start();
    }
})
