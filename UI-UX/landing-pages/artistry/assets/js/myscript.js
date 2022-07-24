$('.carousel').carousel({
    interval: false,
    pause: true
})

// window.onscroll = function() {myFunction()};

// function myFunction() {
    // console.log(document.body.onscrollY);
//   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 50) {
//     document.getElementById("fixNavbar").className = "test";
//   } else {
//     document.getElementById("myP").className = "";
//   }
// }


var lastScrollTop = 0;
var element=document.getElementsByTagName("body");
var menu=document.getElementById("fixNavbar");
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    console.log(st);
   if (st > lastScrollTop){
      // downscroll code
      menu.classList.add("mainNavbarScroll");
      menu.classList.add("mainNavbarMobileScrollBg");
      
   } else {
      // upscroll code
      if(st==0){
          menu.classList.remove("mainNavbarScroll");
          menu.classList.remove("mainNavbarMobileScrollBg");
      }
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);