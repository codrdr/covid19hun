/* Hivatkozás: menü */
var mySidebar = document.getElementById("mySidebar");

/* Hivatkozás: DIV-overlay */
var overlayBg = document.getElementById("myOverlay");

/*A menü elrejtése/megjelenítése és az ehhez kapcsolódó effekt. */
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

/* Bezárja a menüt a bezárás gombbal. */
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}