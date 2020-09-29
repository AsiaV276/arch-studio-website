var menuContent = document.getElementById('dropdown-menu-content');
var closeBtn = document.getElementById('close');
var hamburger = document.getElementById('hamburger');
var menuOpen = false;

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

    console.log(menuOpen);
    
} 

function outsideClick(e) {
  var menuContent = document.getElementById('dropdown-menu-content');
  var menuBlock = document.getElementById('dropdown-menu-content').children[0];
  if (e.target !== menuBlock && e.target !== hamburger) {
    menuContent.style.display = 'none';
    closeBtn.style.display = 'none';
    hamburger.style.display = 'block';
    menuOpen = false;
    console.log(menuBlock);
  }
}

/*
window.addEventListener('click', outsideClick);
function outsideClick(e) {
  var menuContent = document.getElementById('dropdown-menu-content');
  var menuBlock = document.getElementById('dropdown-menu-content').children[0];
  if (e.target !== menuBlock) {
    menuContent.style.display = "none";
    console.log(menuBlock);
  }
}*/

//var menuContent = document.getElementById('dropdown-menu-content');
//var menuBlock = document.getElementById('dropdown-menu-content').children[0];
/*document.body.addEventListener('click', function (e) {
  console.log(e);
  
})*/

//console.log(menuBlock);
/*if (menuContent.style.display == 'block') {
  document.body.addEventListener('click', function (e) {
    console.log(e);
    
  })*/
  /*if (menuContent.style.display == 'block') {
    
  }
  */

