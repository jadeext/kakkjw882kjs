// time-stamp on status page
const ts = document.getElementById('ts');
if (ts) ts.textContent = new Date().toLocaleString();

// close badge (lovable)
const badge = document.getElementById('lovable-badge');
const closeBtn = document.getElementById('lovable-badge-close');
if (badge && closeBtn) {
  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    badge.style.display = 'none';
  });
}
