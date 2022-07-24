  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      var a = document.getElementById("mainFixedNavbar");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      console.log(a);
      a.classList.add("navBarOnScroll");
      // a.style.border-bottom= "";
      // document.getElementById("logo").style.fontSize = "25px";
    } else {
        a.classList.remove("navBarOnScroll");
      // document.getElementById("navbar").style.padding = "80px 10px";
      // document.getElementById("logo").style.fontSize = "35px";
    }
  }