document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });

  // Opcional: fecha o menu ao clicar em um link (mobile)
  navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('show');
    });
  });
});
