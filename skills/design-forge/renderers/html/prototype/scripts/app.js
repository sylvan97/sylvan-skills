const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#mobile-nav');

if (menuButton && nav) {
  const setMenuState = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    nav.hidden = !open;
    nav.dataset.open = String(open);
  };

  setMenuState(false);

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuState(!expanded);
  });
}

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.note-item').forEach((item) => {
      item.hidden = filter !== 'all' && item.dataset.category !== filter;
    });
  });
});
