function toggleVerticalMenu() {
    var verticalMenu = document.getElementById("vertical-menu");
    if (verticalMenu.style.display === "block") {
        verticalMenu.style.display = "none";
    } else {
        verticalMenu.style.display = "block";
    }
}

$(document).ready(function () {
    $("#menu-icon").click(function () {
        $("#vertical-menu").toggle();
    });
});

//  Script for Scroll to top button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


