//getting menu elements and menu open status
var menuContent = document.getElementById('dropdown-menu-content');
var closeBtn = document.getElementById('close');
var hamburger = document.getElementById('hamburger');
var menuOpen = false;

//function toggling the display of the menu and menu icon
//adding or removing outside click function
const openMenu = () => {
    if (menuContent.style.display == 'block') {
      menuContent.style.display = 'none';
      closeBtn.style.display = 'none';
      hamburger.style.display = 'block';
      menuOpen = false;
    } else {
      menuContent.style.display = 'block';
      closeBtn.style.display = 'block';
      hamburger.style.display = 'none';
      menuOpen = true;
      
      if(menuOpen == true) {
        window.addEventListener('click', outsideClick);
      } else {
        window.removeEventListener('click', outsideClick)
      }
    }

} 

function outsideClick(e) {
  var menuContent = document.getElementById('dropdown-menu-content');
  var menuBlock = document.getElementById('dropdown-menu-content').children[0];
  if (e.target !== menuBlock && e.target !== hamburger) {
    menuContent.style.display = 'none';
    closeBtn.style.display = 'none';
    hamburger.style.display = 'block';
    menuOpen = false;
  }
}