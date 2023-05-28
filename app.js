const btnClose = document.querySelector('.btn-close');
const sidebarLeft = document.querySelector('.sidebar-left');
const toggleBtn = document.querySelector('.sidebar-toggle');

toggleBtn.addEventListener('click', function () {
  console.log('evenement afficher click');
  //sidebarLeft.style.display = 'block';
  sidebarLeft.style.visibility = 'visible';
});

btnClose.addEventListener('click', function () {
  console.log('evenement close click');
  //sidebarLeft.style.display = 'none';
  sidebarLeft.style.visibility = 'hidden';
});
