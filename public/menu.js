const openMenu = () => {
    const menuContent = document.getElementById('menu-content');
    const closeBtn = document.getElementById('close');
    const hamburger = document.getElementById('hamburger');
    if (menuContent.style.display == 'block') {
      menuContent.style.display = 'none';
      closeBtn.style.display = 'none';
      hamburger.style.display = 'block';

    } else {
      menuContent.style.display = 'block';
      closeBtn.style.display = 'block';
      hamburger.style.display = 'none';
    }
} 
