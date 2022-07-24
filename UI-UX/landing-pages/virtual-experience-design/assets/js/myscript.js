var navBarOpenButton = document.getElementById("navBarOpenBtn");
var openerNavBarDisplayDiv = document.getElementById("opnerNavBarDiv");

var clickNavBar = document.getElementById("clickNavbar");
var leftSideMobile = document.getElementById("mobileLeftSideOpening");

//close button
 var c1 = document.getElementById("navBarOpenBtn");
 var c2 = document.getElementById("closeButtonLeft");

 //top buttons and logo holder
 var paddingSet = document.getElementById("mobileLogoHolderPaddingSet");

navBarOpenButton.addEventListener("click" ,function(){
    let width = window.innerWidth;
    if(width < 768){
        leftSideMobile.classList.add("onMobileOpen");

        c1.style.display="none";
        paddingSet.style.padding="20px 0px 0px 20px";
       c2.classList.add("closeOpened");

    }else{
        openerNavBarDisplayDiv.classList.add("navBarOpened");
    }
    
})

c2.addEventListener("click" , function(){
    paddingSet.style.padding="20px 20px 0px 20px";
    leftSideMobile.classList.remove("onMobileOpen");
    c1.style.display="flex";
    c2.classList.remove("closeOpened");
})



var close = document.getElementById("closeButton");

close.addEventListener("click" , function(){
    openerNavBarDisplayDiv.classList.remove("navBarOpened");
})

var rightDisplayMainDiv = document.getElementById("tabsUpperDiv");
function centerShow(id){
    // let width = window.innerWidth;
    if(id=="artGallery-tab"){
        rightDisplayMainDiv.style.justifyContent = "center"
        // if(width <992){
        //     rightDisplayMainDiv.style.justifyContent = "end"
        // }else{
        //     rightDisplayMainDiv.style.justifyContent = "center"
        // }
    }else{
        rightDisplayMainDiv.style.justifyContent = "end"
    }
    console.log(id);
}