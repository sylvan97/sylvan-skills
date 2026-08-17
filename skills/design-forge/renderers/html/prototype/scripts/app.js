const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-header nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? '' : 'flex';
    nav.style.position = expanded ? '' : 'absolute';
    nav.style.top = '72px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '1rem';
    nav.style.background = 'var(--color-bg)';
    nav.style.borderBottom = '1px solid var(--color-line)';
    nav.style.flexDirection = 'column';
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
