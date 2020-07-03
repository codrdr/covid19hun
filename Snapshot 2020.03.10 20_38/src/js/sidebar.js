/* ----- Menü ----- */

/* Hivatkozás: Menü */
var mySidebar = document.getElementById("mySidebar");

/* Hivatkozás: DIV-overlay */
var overlayBg = document.getElementById("myOverlay");

/* Hivatkozás: Üdvözlő üzenet eltűntetése*/
var udvozlunk = document.getElementById("udvozlunk");

/*A menü elrejtése/megjelenítése és az ehhez kapcsolódó effekt. */
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
  udvozlunk.style.display = 'none';
}

/* Bezárja a menüt a bezárás gombbal. */
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
  udvozlunk.style.display = 'block';
}

/* ----- Lenyíló menüsáv ----- */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}