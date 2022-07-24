var nav = document.querySelector(".navbar");
var navLink = nav.getElementsByClassName("nav-link");
for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//console.log(navLink)