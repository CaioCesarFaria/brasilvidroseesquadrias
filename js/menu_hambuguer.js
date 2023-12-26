document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');
  
    hamburgerMenu.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
  });
// FUNÇÃO PARA AUMENTO DA IMAGEM
  function toggleImageSize(element) {
    element.classList.toggle('expanded');
  }

  
  