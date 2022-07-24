function menuFunc() {
    document.querySelector(".mainNavBar .navbar-toggler").click()
};

function myDropdown(dropdown){
    console.log('ok');
    console.log(dropdown);
    var temp = document.getElementById(dropdown);
}

function sideNavbarDisplay(){
    console.log("ok");
    var a = document.getElementById("rightSideNavbar");
    a.classList.add("right_show");
}

function closeRightSideNavBar(){
    document.getElementById("rightSideNavbar").classList.remove("right_show");   
}

var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: true,
    thumbs: {
      swiper: swiper,
    },
  });


  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var a = document.getElementById("mainNavbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    a.style.backgroundColor = "#323232";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
      a.style.backgroundColor = "transparent";
    // document.getElementById("navbar").style.padding = "80px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
  }
}