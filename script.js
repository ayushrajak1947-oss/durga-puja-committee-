const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => {
  nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('copy').addEventListener('click', async () => {
  const upi = document.getElementById('upi').textContent.trim();
  const msg = document.getElementById('copyMsg');
  try {
    await navigator.clipboard.writeText(upi);
    msg.textContent = 'UPI ID copy ho gayi!';
  } catch (e) {
    msg.textContent = 'UPI ID: ' + upi + ' — ise manually copy kar lein.';
  }
});
