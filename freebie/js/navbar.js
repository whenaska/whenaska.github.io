function openNavbar() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation-items") {
      x.className += " responsive";
    } else {
      x.className = "navigation-items";
    }
}