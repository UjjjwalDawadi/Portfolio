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
        $("#vertical-menu").toggle(); // Toggle the visibility of the vertical menu
    });
});