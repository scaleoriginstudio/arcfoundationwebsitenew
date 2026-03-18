/* programs.js */
function scrollSec(id) { document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' }); }
const secs = ['debate','environment','social'];
const tabs = document.querySelectorAll('.prog-tab');
window.addEventListener('scroll', () => {
  let active = 0;
  secs.forEach((id,i) => { const el = document.getElementById(id); if(el && window.scrollY >= el.offsetTop - 130) active = i; });
  tabs.forEach((t,i) => t.classList.toggle('active', i === active));
}, { passive: true });