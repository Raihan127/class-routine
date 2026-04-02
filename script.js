const html = document.documentElement;
const sun  = document.getElementById('icon-sun');
const moon = document.getElementById('icon-moon');

function setTheme(t) {
  html.setAttribute('data-theme', t);
  sun.style.display  = t === 'dark' ? 'block' : 'none';
  moon.style.display = t === 'dark' ? 'none'  : 'block';
  localStorage.setItem('cr-theme', t);
}

setTheme(localStorage.getItem('cr-theme') || 'light');

document.getElementById('theme-toggle').addEventListener('click', () =>
  setTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light')
);

document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const id = btn.dataset.day;
    document.querySelectorAll('.day').forEach(d =>
      d.id === id ? d.classList.add('active') : d.classList.remove('active')
    );
  });
});