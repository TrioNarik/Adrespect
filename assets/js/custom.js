// Menu =========================================
const submenuItems = document.querySelectorAll('.has-submenu > a');

submenuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = item.parentNode.querySelector('.submenu');
    submenu.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-submenu')) {
    const activeSubmenus = document.querySelectorAll('.submenu.active');
    activeSubmenus.forEach(submenu => {
      submenu.classList.remove('active');
    });
  }
});
// =================================================

//  =================== Menu Mobile ==================

const navMenu = document.querySelector('nav');
const navLink = document.querySelectorAll('nav ul li a');
const mobMenu = navMenu.querySelector('ul');
const mobDiv = document.createElement('div');
mobDiv.classList.add('hamburger');

for (let i = 0; i < 3; i++) {
  const span = document.createElement('span');
  span.classList.add('bar');
  mobDiv.appendChild(span);
}

navMenu.appendChild(mobDiv);

mobDiv.addEventListener('click', mobileMenu);
navLink.forEach(n => n.addEventListener('click', closeMenu));

function mobileMenu() {
  mobDiv.classList.toggle('active');
  mobMenu.classList.toggle('active');
}

function closeMenu() {
  mobDiv.classList.remove('active');
  mobMenu.classList.remove('active');
}


// Masonry Gallery =======================================
let gallery = document.querySelector('.gallery');

let masonry = new Masonry(gallery, {
    itemSelector: 'li',
    columnWidth: 'li',
    percentPosition: true,
    gutter: 30,
    fitWidth: true, // Dodaj tę właściwość
});


const expandButton = document.querySelector('.expand-button');
const gal = document.querySelector('.gallery-wrapper');

expandButton.addEventListener('click', function () {
  gal.classList.toggle('expanded');
  expandButton.style.display = 'none';
});

// MODAL ================================================
document.addEventListener('DOMContentLoaded', function () {
    let modalTrigger = document.querySelectorAll('.open-modal');
    let modalImage = document.getElementById('modalImage');
    let imageModal = document.getElementById('imageModal');

    modalTrigger.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            var imageSrc = this.querySelector('img').getAttribute('src');
            modalImage.src = imageSrc;
            imageModal.classList.add('show');
        });
    });

    imageModal.addEventListener('click', function () {
        imageModal.classList.remove('show');
    });
});