/* join.js */
document.querySelectorAll('.opening-row').forEach(row => {
  row.addEventListener('click', () => {
    const title = row.querySelector('.or-title')?.textContent || '';
    const select = document.querySelector('[name="role"]');
    if (select) {
      const opt = [...select.options].find(o => o.text.includes(title.substring(0,20).trim()));
      if (opt) select.value = opt.value;
    }
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.getElementById('join-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Submitting…'; btn.disabled = true;
  const data = Object.fromEntries(new FormData(this));
  data._form = 'join'; data._to = 'hanabiradesigns.in';
  try {
    await fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data), mode: 'no-cors'
    });
  } catch(_) {}
  this.style.display = 'none';
  document.getElementById('join-success').style.display = 'block';
});