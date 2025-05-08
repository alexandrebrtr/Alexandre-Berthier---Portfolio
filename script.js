// Menu responsive toggle
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
  navlist.classList.toggle('show');
};

