$(function() {
  $("nav").load("menu.html");
  $("footer").load("footer.html");
});

// Curtain menu
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// End curtain menu


// Swipe carousel for mobile - Fimls.html
  