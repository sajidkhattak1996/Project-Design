$('.carousel').carousel({
    interval: false,
    pause: true
})

// $('.carousel').carousel('pause');


$('.product_slider_owl').owlCarousel({
    nav: true,
    // stagePadding: 50,
    loop: true,
    margin: 15,
    navText: ["<div class='nav-btn prev-slide'><i class='fal fa-chevron-left'></i></div>", "<div class='nav-btn next-slide'><i class='fal fa-chevron-right'></i></div>"],
    dots: false,
    touchDrag: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


$('.instagramfeedOWL').owlCarousel({
    nav: false,
    // stagePadding: 50,
    loop: true,
    margin: 15,
    // navText:["<div class='nav-btn prev-slide'><i class='fal fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fal fa-chevron-right'></i></div>"],
    dots: false,
    touchDrag: true,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
})


$('.testomonial').owlCarousel({
    nav: true,
    // stagePadding: 50,
    loop: true,
    margin: 30,
    navText: ["<div class='nav-btn prev-slide testomonialPreview'><i class='fal fa-chevron-left'></i></div>", "<div class='nav-btn next-slide testomonialNext'><i class='fal fa-chevron-right'></i></div>"],
    dots: false,
    touchDrag: true,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
})

$('.testomonialLogo').owlCarousel({
    nav: false,
    // stagePadding: 50,
    loop: true,
    margin: 15,
    // navText:["<div class='nav-btn prev-slide'><i class='fal fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fal fa-chevron-right'></i></div>"],
    dots: false,
    touchDrag: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 6
        }
    }
})

function menuFunc() {
    document.querySelector(".mainNavBar .navbar-toggler").click()
};

function dropDownHandler(button,dropdown){
    var icon = "."+button+" i";
    console.log(dropdown);
    var check = $(icon).is(".fa-chevron-down");

    console.log(check);

    if(check == true){
        $(icon).removeClass( "fa-chevron-down" ).addClass("fa-chevron-up");
    }
    else{
        $(icon).removeClass( "fa-chevron-up" ).addClass("fa-chevron-down");
    }
    $("."+dropdown).toggle();

}
