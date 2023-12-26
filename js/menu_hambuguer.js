document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');
  
    hamburgerMenu.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
  });



  // MODALLLLLLLL
function openModal(imageSrc) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// Fechar o modal clicando fora da imagem
window.onclick = function (event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
};

  
  